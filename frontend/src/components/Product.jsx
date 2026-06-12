import React from 'react';
export const ProductList = () => {
    const data = [
        { id: 1, name: 'IPhone 19', price: 19345678}
    ]
    return (
        <div>
            Duyệt danh sách hiển thị phần tử
            {data.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export const ProductItem = ({product}) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <h5>{product.price}</h5>
            <button className="bg-blue-600 text-white px-4 py-2">
                Add to Cart
            </button>
        </div>
    )
}