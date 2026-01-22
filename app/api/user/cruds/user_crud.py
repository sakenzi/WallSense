from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from model.models import User


async def dal_get_all_users(db: AsyncSession) -> list[User]:
    stmt = select(User)
    result = await db.execute(stmt)
    return result.scalars().all()

async def dal_get_user_by_id(user_id: int, db: AsyncSession) -> User | None:
    stmt = select(User).where(User.id == user_id)
    result = await db.execute(stmt)
    return result.scalar_one_or_none()