import React, { useState } from 'react';
import {Card, Button, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TotalPrice from './TotalPrice';
import CartPage from './CartPage';
import './Products.css';
//import { Link } from 'react-router-dom';




const Products = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    
    
    const Products = [
        {id: 1, name: 'Product 1', description: 'White Hoodie', price: 10, image: 'p1.webp'},
        {id: 2, name: 'Product 2', description: 'Black Hoodie', price: 20, image: 'p2.webp'},
        {id: 3, name: 'Product 3', description: 'Yellow Hoodie', price: 30, image: 'p3.webp'},
        {id: 4, name: 'Product 4', description: 'SmokeWhite Hoodie', price: 40, image: 'p4.webp'},
        {id: 5, name: 'Product 5', description: 'Blue Hoodie', price: 50, image: 'p5.webp'},
        {id: 6, name: 'Product 6', description: 'Red Winter Jacket', price: 60, image: 'p6.webp'},
        {id: 7, name: 'Product 7', description: 'White Sweater', price: 70, image: 'p7.webp'},
        {id: 8, name: 'Product 8', description: 'Yellow Short', price: 80, image: 'p8.webp'},
        {id: 9, name: 'Product 9', description: 'Leather Jacket', price: 90, image: 'p9.webp'},
        {id: 10, name: 'Product 10', description: 'Brown Hoodie and Skirt', price: 100, image: '10.webp'},
    ];

    const handleAddToCart = (product) => {
        setSelectedProducts([...selectedProducts, product]);
    };
   
  return (
    
    <div className='products-container'>
        <h1>Welcome to My Store</h1>
      <div className='product-list' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Products.map((product) =>(
            <Card key={product.id} style={{width: '18rem', margin: '10px'}} className="mb-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Product ID: {product.id}</Card.Text> 
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Title>Price: R{product.price}</Card.Title>

                    <Dropdown style={{ marginBottom: '10px' }}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Select Color

                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Red</Dropdown.Item>
                            <Dropdown.Item>Blue</Dropdown.Item>
                            <Dropdown.Item>Green</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="primary" style={{ marginRight: '5px', marginBottom: '5px' }} onClick={() => handleAddToCart(product)}>Buy</Button>
                    
                <Link to={'/CartPage'}>
                
                                <Button variant="secondary" style={{ marginRight: '5px', marginBottom: '5px' }} onClick={() => handleAddToCart(product)}>Cart</Button>
                            </Link>
                </Card.Body>
                </Card>
        ))}

      </div>
      <TotalPrice selectedProducts={selectedProducts} />
      <CartPage selectedProducts={selectedProducts}/>
   
      
    </div>
  )
}

export default Products;
