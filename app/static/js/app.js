* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-2: #0d1a2d;
  --panel: rgba(15, 23, 42, 0.92);
  --panel-strong: rgba(10, 17, 26, 0.96);
  --line: rgba(126, 249, 255, 0.3);
  --primary: #7ef9ff;
  --secondary: #7c9cff;
  --accent: #7af9a7;
  --warning: #ffd166;
  --danger: #ff6b7d;
  --text: #edf5ff;
  --muted: #a5b4d0;
}

html, body {
  margin: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at top, rgba(124, 156, 255, 0.18), transparent 25%),
    linear-gradient(135deg, var(--bg), var(--bg-2));
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  padding: 24px;
}

button {
  font-family: 'Inter', sans-serif;
}

.app-shell {
  width: min(1400px, 100%);
  background: rgba(7, 17, 31, 0.7);
  border: 1px solid rgba(126, 249, 255, 0.2);
  border-radius: 28px;
  box-shadow: 0 30px 80px rgba(3, 8, 17, 0.6);
  padding: 24px;
  backdrop-filter: blur(12px);
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.title-block h1 {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.2rem, 4vw, 4rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--primary);
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: 700;
}

.subtitle {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 1.1rem;
}

.status-chip {
  background: rgba(20, 33, 51, 0.85);
  border: 1px solid var(--line);
  padding: 12px 18px;
  border-radius: 999px;
  color: var(--warning);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.76rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.camera-panel,
.sidebar .info-box,
.sidebar .stat-box {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
}

.camera-panel {
  padding: 16px;
}

.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #020811;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(126, 249, 255, 0.2);
}

#video,
#overlayCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #010b16;
}

#overlayCanvas {
  z-index: 2;
  pointer-events: none;
}

.camera-overlay {
  position: absolute;
  left: 18px;
  top: 18px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(10, 17, 26, 0.7);
  border: 1px solid rgba(126, 249, 255, 0.2);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.live-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--danger);
  box-shadow: 0 0 12px rgba(255, 107, 125, 0.8);
  animation: pulse 1.4s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.25); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.controls {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

button {
  border: none;
  border-radius: 14px;
  padding: 16px 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
  min-height: 56px;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(126, 249, 255, 0.15);
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), #9ae9ff);
  color: #051320;
}

.neutral-btn {
  background: linear-gradient(135deg, #3f536d, #22354c);
  color: var(--text);
}

.secondary-btn {
  background: rgba(124, 156, 255, 0.16);
  color: var(--text);
  border: 1px solid rgba(124, 156, 255, 0.4);
}

.challenge-btn {
  background: linear-gradient(135deg, #7af9a7, #9bf5cd);
  color: #06140e;
}

.message-banner {
  margin-top: 16px;
  border-radius: 12px;
  background: rgba(122, 249, 167, 0.12);
  border: 1px solid rgba(122, 249, 167, 0.28);
  color: var(--text);
  padding: 14px 16px;
  min-height: 55px;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.message-banner.error {
  background: rgba(255, 107, 125, 0.12);
  border-color: rgba(255, 107, 125, 0.3);
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.stat-box,
.info-box {
  padding: 18px 18px 16px;
}

.stat-box h3,
.info-box h3 {
  margin: 0 0 14px;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.count-number {
  font-size: clamp(2.2rem, 4vw, 3.3rem);
  font-weight: 800;
  font-family: 'Orbitron', sans-serif;
}

.personality-box p,
.challenge-box p,
.results-box li {
  color: var(--text);
  line-height: 1.6;
  margin: 0;
}

.score-line {
  margin-top: 10px !important;
  font-weight: 700;
}

#resultsList {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

#resultsList li {
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(126, 249, 255, 0.05);
  border: 1px solid rgba(126, 249, 255, 0.12);
}

.timeline-section,
.future-section {
  margin-top: 24px;
  background: var(--panel-strong);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px 20px;
}

.timeline-section h2,
.future-section h2 {
  margin: 0 0 18px;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 1.1rem;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.year-box {
  background: rgba(124, 156, 255, 0.08);
  border: 1px solid rgba(124, 156, 255, 0.22);
  border-radius: 14px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 6px;
  color: var(--text);
}

.year-box.highlight {
  background: linear-gradient(135deg, rgba(126, 249, 255, 0.18), rgba(122, 249, 167, 0.18));
  border-color: rgba(126, 249, 255, 0.4);
}

.year {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
}

.year-box small {
  color: var(--primary);
  font-weight: 600;
}

.future-section p {
  margin: 0;
  font-size: 1.3rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .controls {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .timeline {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  body {
    padding: 14px;
  }

  .app-shell {
    padding: 16px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .controls {
    grid-template-columns: 1fr;
  }

  .timeline {
    grid-template-columns: 1fr;
  }
}
