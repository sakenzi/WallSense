from pydantic import BaseModel


class EquipmentTypeResponse(BaseModel):
    message: str


class EquipmentTypeBase(BaseModel):
    id: int
    type_name: str

    class Config:
        from_attributes = True