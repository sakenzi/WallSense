from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from database.db import get_db

from app.api.equipment_type.schemas.create import EquipmentTypeCreate
from app.api.equipment_type.schemas.response import EquipmentTypeResponse, EquipmentTypeBase
from app.api.equipment_type.commands.equipment_type_command import (
    bll_create_type,
    bll_get_all_types,
)
import logging


logger = logging.getLogger(__name__)

router = APIRouter()

@router.post(
    "",
    summary="Создание типа оборудования",
    response_model=EquipmentTypeResponse,
    status_code=201,
)
async def add_type(type_data: EquipmentTypeCreate, db: AsyncSession = Depends(get_db)):
    logger.info(f"Creating equipment type: {type_data.type_name}")
    return await bll_create_type(type_data, db)


@router.get(
    "",
    summary="Получить все типы оборудования",
    response_model=list[EquipmentTypeBase],
)
async def all_types(db: AsyncSession = Depends(get_db)):
    logger.info("Retrieving all equipment types")
    return await bll_get_all_types(db)
