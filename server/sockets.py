from socketio import AsyncServer, ASGIApp

sio = AsyncServer(always_connect=True, async_mode='asgi',
                     cors_allowed_origins=['*'])
asgi_app = ASGIApp(socketio_server=sio)


@sio.event
async def connect(sid, environ, auth):
    await sio.emit('server_connect', "Successfully connected to server!")
    print('Connected')


@sio.on('verified_connection')
async def on_verified_connection(sid, msg):
    print(msg)