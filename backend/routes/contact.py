from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.contact import ContactMessage, ContactMessageCreate
from typing import List
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])


def get_contact_router(db: AsyncIOMotorDatabase):
    @router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
    async def create_contact_message(message_data: ContactMessageCreate):
        """Submit a contact form message"""
        try:
            # Create message object
            message_obj = ContactMessage(**message_data.dict())
            
            # Insert into database
            result = await db.contact_messages.insert_one(message_obj.dict())
            
            logger.info(f"Contact message received from {message_data.email}")
            
            return {
                "success": True,
                "message": "Message sent successfully",
                "id": message_obj.id
            }
        except Exception as e:
            logger.error(f"Error saving contact message: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to send message. Please try again later."
            )
    
    @router.get("", response_model=List[ContactMessage])
    async def get_contact_messages():
        """Get all contact messages (admin endpoint)"""
        try:
            messages = await db.contact_messages.find().sort("created_at", -1).to_list(100)
            return [ContactMessage(**msg) for msg in messages]
        except Exception as e:
            logger.error(f"Error fetching contact messages: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to fetch messages"
            )
    
    return router
