from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.equipment_type.schemas.create import EquipmentTypeCreate
from app.api.equipment_type.schemas.response import EquipmentTypeBase, EquipmentTypeResponse
from app.api.equipment_type.cruds.equipment_type_crud import (
    dal_create_type,
    dal_get_type_by_name,
    dal_get_all_types,
)
import logging

logger = logging.getLogger(__name__)

async def bll_create_type(type_data: EquipmentTypeCreate, db: AsyncSession) -> EquipmentTypeResponse:
    existing_type = await dal_get_type_by_name(type_data.type_name, db)
    if existing_type:
        logger.error(f"Attempt to create duplicate type: {type_data.type_name}")
        raise HTTPException(status_code=400, detail="Такой тип объявления уже существует")

    await dal_create_type(type_data.type_name, db)
    logger.info(f"Type {type_data.type_name} created successfully")
    return EquipmentTypeResponse(message="Добавлено тип объявления")


async def bll_get_all_types(db: AsyncSession) -> list[EquipmentTypeBase]:
    types = await dal_get_all_types(db)
    return [EquipmentTypeBase(id=t.id, type_name=t.type_name) for t in types]
