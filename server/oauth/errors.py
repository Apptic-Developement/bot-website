from fastapi.exceptions import HTTPException

class Unauthorized(Exception):
    "Unauthorized"

class InvalidAccessToken(Exception):
    "InvalidAccessToken"

class InvalidExchangeCode(Exception):
    "InvalidExchangeCode"