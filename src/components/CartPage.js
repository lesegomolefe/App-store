import React from 'react';
import { Card } from 'react-bootstrap';

const CartPage = ({ selectedProducts }) => {
    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {selectedProducts && selectedProducts.length !== 0 ? (
                selectedProducts.map((product) => (
                    <Card key={product.id} style={{ width: '18rem', margin: '10px' }} className="mb-3">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>Price: R{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
};

export default CartPage;



