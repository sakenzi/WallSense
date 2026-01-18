from pydantic import BaseModel, Field


class EquipmentTypeCreate(BaseModel):
    type_name: str = Field(..., min_length=1, max_length=100)

    class Config:
        from_attributes = True
