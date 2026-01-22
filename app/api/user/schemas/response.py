from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    id: int
    fullname: str
    company: str
    email: EmailStr

    class Config:
        from_attributes = True
