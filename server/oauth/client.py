from typing import Union
from httpx import AsyncClient
from models import ExchangeCode
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