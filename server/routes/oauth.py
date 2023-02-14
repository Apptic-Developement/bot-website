from fastapi import APIRouter


router = APIRouter()

@router.get('/login')
async def login_route():
    return "Login kr"

