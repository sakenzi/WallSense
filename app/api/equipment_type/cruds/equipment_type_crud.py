from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from model.models import EquipmentType
import logging


logger = logging.getLogger(__name__)

async def dal_create_type(type_name: str, db: AsyncSession) -> EquipmentType:
    existing_type = await dal_get_type_by_name(type_name, db)
    if existing_type:
        logger.info(f"Type {type_name} already exists")
        return existing_type
    
    new_type = EquipmentType(type_name=type_name)
    db.add(new_type)
    await db.commit()
    await db.refresh(new_type)
    logger.info(f"Created new type: {type_name}")
    return new_type


async def dal_get_type_by_name(type_name: str, db: AsyncSession) -> EquipmentType | None:
    stmt = select(EquipmentType).filter(EquipmentType.type_name == type_name)
    result = await db.execute(stmt)
    return result.scalar_one_or_none()


async def dal_get_all_types(db: AsyncSession) -> list[EquipmentType]:
    stmt = select(EquipmentType)
    result = await db.execute(stmt)
    types = result.scalars().all()
    logger.info(f"Retrieved {len(types)} equipment types")
    return types