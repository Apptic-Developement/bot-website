from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from routes import (
    oauth
)
import configs


app = FastAPI()


@app.get('/')
async def home():
    return "Working 😌"

app.include_router(router=oauth.router) 