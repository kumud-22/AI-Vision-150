from flask import Flask
from app.routes import main_bp


def create_app() -> Flask:
    app = Flask(__name__, template_folder="app/templates", static_folder="app/static")
    app.config["MAX_CONTENT_LENGTH"] = 16 * 1024 * 1024
    app.register_blueprint(main_bp)
    return app
