from typing import Literal, Union
from httpx import AsyncClient
from models import ExchangeCode
from models import User
import configs

__all__ = (
    "Client",
)
class Client:
    """This class handles the whole authintication system."""

    def __init__(self) -> None:
        self.session = AsyncClient
        self.api_endpoint = configs.API_ENDPOINT
        self.base_auth_url = configs.BASE_AUTH_URL
        self.token_url = configs.TOKEN_URL
        self.token_revoke_url = configs.TOKEN_REVOKE_URL
        self.client_id = configs.CLIENT_ID
        self.client_secret = configs.CLIENT_SECRET
        self.redirect_uri = configs.REDIRECT_URL
        self.user_endpoint = configs.USER_ENDPOINT

    async def request(self, route: str, token: str, method: Literal['GET', 'POST']):
        headers = {"Authorization": f"Bearer {token}"}
        if method == 'GET':
            async with self.session() as session:
                res = await session.get(self.api_endpoint+route)
                if res.status_code != 200:
                    return None
                return res.json()
            

    async def get_access_token(self, code: str) -> Union[ExchangeCode, None]:
        data = {
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': self.redirect_uri
        }
        headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
        async with self.session() as session:
            res = await session.post(self.api_endpoint+self.token_url, data=data, headers=headers)
            if res.status_code != 200:
                print(res.json())
                return None
        return ExchangeCode(**res.json())

    async def fetch_user(self, access_token: str) -> Union[User, None]:
        user = await self.request(self.user_endpoint, access_token, 'GET')
        if not user: return None
        return User(**user)