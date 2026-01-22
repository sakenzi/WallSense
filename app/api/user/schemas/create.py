from pydantic import BaseModel
from typing import Optional


class UserBase(BaseModel):
    fullname: str
    company: str
    email: str

    class Config:
        from_attributes = True
