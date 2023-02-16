from fastapi import APIRouter, Request
from oauth import Client


router = APIRouter()
client = Client()  # type: ignore


@router.post('/callback')
async def callback_route(code: str):
    data = await client.get_access_token(code)
    return data

@router.get('/me')
async def me_route(req: Request):
    user = await client.fetch_user(req.headers.get("token")) 
    return user

