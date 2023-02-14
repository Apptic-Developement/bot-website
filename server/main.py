from fastapi import FastAPI
from routes import (
    oauth
)
from fastapi.middleware.cors import CORSMiddleware
import configs


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def home():
    return "Working 😌"

app.include_router(router=oauth.router)

