import os
from typing import List, Dict

import cv2
import numpy as np
from ultralytics import YOLO

MODEL_NAME = "yolov8n.pt"
MODEL_PATH = os.path.join(os.path.expanduser("~"), ".cache", "ultralytics", "weights", MODEL_NAME)

PERSONALITY_QUOTES = {
    "backpack": "The legendary carrier of books, snacks and mysterious objects.",
    "book": "Knowledge detected. 📚",
    "laptop": "The classic student survival device.",
    "bottle": "Hydration protocol activated.",
    "cell phone": "Distraction detected. 😭",
    "person": "Human detected. AI remains slightly concerned.",
    "chair": "A reliable supporter of education.",
    "clock": "Time is being monitored.",
    "keyboard": "Keys are ready for action.",
    "mouse": "Precision gear detected.",
    "pen": "The writing wizard is here.",
    "pencil": "A tiny but powerful tool for ideas.",
    "cup": "A calm reminder that coffee is a lifestyle.",
}

_model = None


def load_model():
    global _model
    if _model is not None:
        return _model

    try:
        _model = YOLO(MODEL_NAME)
        return _model
    except Exception as exc:  # pragma: no cover - runtime dependency issue
        raise RuntimeError(
            "Could not load the YOLO model. Please install dependencies with: pip install -r requirements.txt"
        ) from exc


def get_ai_comment(class_name: str) -> str:
    normalized = class_name.lower().strip()
    return PERSONALITY_QUOTES.get(normalized, "Object detected — I'm still learning!")


def detect_objects(frame: np.ndarray) -> Dict[str, object]:
    model = load_model()

    try:
        results = model(frame, conf=0.35, verbose=False)[0]
    except Exception as exc:  # pragma: no cover - runtime issue
        raise RuntimeError(f"Detection failed: {exc}") from exc

    detections: List[Dict[str, float]] = []

    if results.boxes is None:
        return {
            "count": 0,
            "detections": [],
            "comment": "The AI is waiting for something interesting to appear.",
        }

    names = model.names
    for box in results.boxes:
        x1, y1, x2, y2 = map(float, box.xyxy[0].tolist())
        conf = float(box.conf[0]) * 100
        cls_index = int(box.cls[0])
        class_name = names.get(cls_index, "object")

        detections.append(
            {
                "class_name": class_name,
                "confidence": round(conf, 1),
                "x1": int(x1),
                "y1": int(y1),
                "x2": int(x2),
                "y2": int(y2),
            }
        )

    comment = ""
    if detections:
        top_object = detections[0]["class_name"]
        comment = get_ai_comment(top_object)
    else:
        comment = "The AI is waiting for something interesting to appear."

    return {
        "count": len(detections),
        "detections": detections,
        "comment": comment,
    }
