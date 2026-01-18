from sqlalchemy import (
    String, 
    Integer, 
    Text, 
    Column, 
    func, 
    DateTime, 
    ForeignKey, 
    Float, 
    Boolean, 
    DECIMAL, 
    Date, 
)
from sqlalchemy.orm import relationship
from database.db import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    fullname = Column(String(100), nullable=False)
    company = Column(String(100), nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)

    equipments = relationship("Equipment", back_populates="user", cascade="all, delete", passive_deletes=True)


class EquipmentType(Base):
    __tablename__ = 'equipment_types'

    id = Column(Integer, primary_key=True, index=True)
    type_name = Column(String(100), nullable=False)

    equipments = relationship("Equipment", back_populates="equipment_type", cascade="all, delete", passive_deletes=True)


class Equipment(Base):
    __tablename__ = 'equipments'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    is_active = Column(Boolean, default=False)
    user_id = Column(Integer, ForeignKey('users.id', ondelete="CASCADE"), nullable=False)
    equipment_type_id = Column(Integer, ForeignKey('equipment_types.id', ondelete='CASCADE'), nullable=False)

    user = relationship("User", back_populates="equipments")
    equipment_type = relationship("EquipmentType", back_populates="equipments")

