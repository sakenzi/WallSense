from fastapi import APIRouter
from app.api.auth.auth_api import router as auth_router
from app.api.equipment_type.equipment_type_api import router as equipment_type_router
from app.api.user.user_api import router as user_router


route = APIRouter()

route.include_router(auth_router, prefix="/auth", tags=["AUTHENTICATION"])
route.include_router(equipment_type_router, prefix="/equipment_type", tags=["EQUIPMENT TYPE"])
route.include_router(user_router, prefix="/user", tags=["USER"])