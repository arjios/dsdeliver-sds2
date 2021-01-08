import React from 'react';

import { Product } from './types';

type Props = {
    product: Product;
}

const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return formatter.format(price);
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri}
                className="order-card-image"
                alt={product.name}
            />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <h3 className="order-card-description">
                Descrição
                <p>
                    {product.description}
                </p>
            </h3>
        </div>
    );
}

export default ProductCard;