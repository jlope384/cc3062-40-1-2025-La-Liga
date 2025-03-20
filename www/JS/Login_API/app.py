from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import bcrypt
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE = "./data/users.db"


class User(BaseModel):
    username: str
    password: str


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


@app.on_event("startup")
def startup():
    os.makedirs("data", exist_ok=True)
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    """
    )
    conn.commit()
    conn.close()


@app.get("/ping")
def ping():
    return {"message": "pong"}


@app.post("/register")
def register(user: User):
    conn = get_db()
    cursor = conn.cursor()

    hashed = bcrypt.hashpw(user.password.encode("utf-8"), bcrypt.gensalt()).decode(
        "utf-8"
    )

    try:
        cursor.execute(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            (user.username, hashed),
        )
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        raise HTTPException(status_code=409, detail="Username already exists")

    conn.close()

    return {"success": True, "message": "Usuario registrado exisosamente"}


@app.post("/login")
def login(user: User):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT password FROM users WHERE username = ?", (user.username,))
    # cursor.execute("SELECT password FROM users WHERE username = " + user.username)
    row = cursor.fetchone()
    conn.close()

    if row is None:
        raise HTTPException(status_code=401, detail="Usuario o clave incorrecto")

    stored = row["password"]

    if not bcrypt.checkpw(user.password.encode("utf-8"), stored.encode("utf-8")):
        raise HTTPException(status_code=401, detail="Usuario o clave incorrecto")

    return {"success": True, "message": "Login Exitoso"}
