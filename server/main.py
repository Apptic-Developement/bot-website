from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from routes import (
    oauth
)
from fastapi.middleware.cors import CORSMiddleware
from sockets import asgi_app, sio
from oauth.errors import InvalidExchangeCode, Unauthorized

app = FastAPI()
app.mount('/ws', asgi_app)

commands = []



@sio.event
async def connect(sid, environ, auth):
    await sio.emit("command_request")

@sio.on("recive_commands")
async def on_recive_commands(_, cmd):
    commands.append(cmd)


@app.get('/')
async def home():
    return "Working 😌"


@app.get('/commands')
async def commands_route():
    return commands[0]

@app.exception_handler(Unauthorized)
async def unauthorized_Error(req: Request, exc: Unauthorized):
    return JSONResponse(
        status_code=401,
        content={"message": f"Unauthorized!"},
    )


@app.exception_handler(InvalidExchangeCode)
async def invalid_Exc_Error(req: Request, exc: InvalidExchangeCode):
    return JSONResponse(
        status_code=501,
        content={"message": f"Invalid Exchange Code!"},
    )


app.include_router(router=oauth.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)