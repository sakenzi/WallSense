from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from database.db import get_db
from app.api.user.schemas.response import UserBase
from app.api.user.commands.user_command import bll_get_all_users, bll_get_user_by_id


router = APIRouter()

@router.get(
    "",
    summary="Получить всех пользователей",
    response_model=list[UserBase]
)
async def get_all_users(db: AsyncSession = Depends(get_db)):
    return await bll_get_all_users(db)

@router.get(
    "/{user_id}",
    summary="Получить пользователя по ID",
    response_model=UserBase
)
async def get_user_by_id(user_id: int, db: AsyncSession = Depends(get_db)):
    return await bll_get_user_by_id(user_id, db)