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
    fullname = Column(String(100), nullable=True)
    company = Column(String(100), nullable=True)
    email = Column(String, unique=True, nullable=True)
    password = Column(String, nullable=True)