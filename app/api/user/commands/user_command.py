from sqlalchemy.ext.asyncio import AsyncSession
from app.api.user.schemas.response import UserBase
from app.api.user.cruds.user_crud import dal_get_all_users, dal_get_user_by_id
from fastapi import HTTPException


async def bll_get_all_users(db: AsyncSession) -> list[UserBase]:
    users = await dal_get_all_users(db)
    return [
        UserBase(
            id=u.id,
            fullname=u.fullname,
            company=u.company,
            email=u.email
        )
        for u in users
    ]

async def bll_get_user_by_id(user_id: int, db: AsyncSession) -> UserBase:
    user = await dal_get_user_by_id(user_id, db)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="Пользователь не найден"
        )

    return UserBase(
        id=user.id,
        fullname=user.fullname,
        company=user.company,
        email=user.email
    )