from fastapi import FastAPI, Request
from routes import (
    oauth
)
from fastapi.middleware.cors import CORSMiddleware
import configs
from oauth.errors import InvalidExchangeCode, Unauthorized


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def home():
    return "Working 😌"

@app.exception_handler(Unauthorized)
async def unauthorized_Error(req: Request, exc: Unauthorized):
    return {"message": 'Unauthorized', "code": 401}


@app.exception_handler(InvalidExchangeCode)
async def invalid_Exc_Error(req: Request, exc: InvalidExchangeCode):
    return {"message": 'Invalid exchange code.', "code": 501}


app.include_router(router=oauth.router)

