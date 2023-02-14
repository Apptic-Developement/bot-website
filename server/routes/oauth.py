from fastapi import APIRouter, Request
from oauth import Client


router = APIRouter()
client = Client() # type: ignore

@router.post('/callback')
async def callback_route(code: str):
    data = await client.get_access_token(code)
    if data is None: return "No Data"
    return data


