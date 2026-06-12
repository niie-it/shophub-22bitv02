from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {
        "message": "Welcome to ShopHub API"
    }

PRODUCT_DATA = [
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Mouse"
  }
]

@app.get("/products")
def get_all_product():
    return PRODUCT_DATA

@app.get("/products/{id}")
def get_product_by_id(id:int):
    for item in PRODUCT_DATA:
        print(item)
        if item["id"] == id:
            return item
    return None