from pydantic import BaseModel

__all__ = (
    "ExchangeCode",
)
class ExchangeCode(BaseModel):
    access_token: str
    token_type: str
    refresh_token: str
    scope: str
    expires_in: int

