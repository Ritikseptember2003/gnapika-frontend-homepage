from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from typing import Optional, List
import os
from dotenv import load_dotenv
from bson import ObjectId

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection setup
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017/mydatabase")  
client = AsyncIOMotorClient(MONGODB_URI)
db = client.get_database()  
cart_items_collection = db.cart_items  

class CartItem(BaseModel):
    id: Optional[str] = Field(None, alias="_id")  
    name: str
    price: float = Field(..., gt=0, description="Price must be a positive number")
    quantity: int = Field(1, gt=0, description="Quantity must be a positive integer")
    image: Optional[str] = None

    class Config:
        json_encoders = {ObjectId: str} 

@app.post("/api/cart", response_model=CartItem)
async def add_cart_item(cart_item: CartItem):
    try:
        item = cart_item.dict(exclude={"id"}) 
        result = await cart_items_collection.insert_one(item)
        item["_id"] = str(result.inserted_id) 
        return item
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error adding item to cart: {e}")

@app.get("/api/cart", response_model=List[CartItem])
async def get_cart_items():
    try:
        cart_items = []
        async for item in cart_items_collection.find():
            item["_id"] = str(item["_id"]) 
            cart_items.append(item)
        return cart_items
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching cart items: {e}")

@app.put("/api/cart/{item_id}", response_model=CartItem)
async def update_cart_item(item_id: str, cart_item: CartItem):
    try:
        item_id_obj = ObjectId(item_id)  
        item_data = cart_item.dict(exclude={"id"})  
        result = await cart_items_collection.replace_one({"_id": item_id_obj}, item_data)
        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="Item not found or no changes made")
        return {**item_data, "_id": item_id} 
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error updating cart item: {e}")

@app.delete("/api/cart/{item_id}", response_model=dict)
async def remove_cart_item(item_id: str):
    try:
        result = await cart_items_collection.delete_one({"_id": ObjectId(item_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Item not found")
        return {"message": "Item removed from cart"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error removing item from cart: {e}")

@app.delete("/api/cart/clear", response_model=dict)
async def clear_cart():
    try:
        await cart_items_collection.delete_many({})
        return {"message": "Cart cleared"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error clearing cart: {e}")

# To run the backend
# uvicorn app:app --reload --host 0.0.0.0 --port 5000 in virtual environment
# mongod
# npm start
