import React from 'react'
import './TotalPrice.css';

const TotalPrice =({selectedProducts}) =>  {
    const TotalPrice = selectedProducts.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className='total-price-container'>
        <h2>Total Price: R{TotalPrice}</h2>
      
    </div>
  );
}

export default TotalPrice;
