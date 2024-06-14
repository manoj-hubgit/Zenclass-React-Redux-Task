import React from 'react';
import { useSelector } from 'react-redux';
import OperationDisplay from '../Components/OperationDisplay';

const ProductList = () => {
  const products = useSelector((state) => state.products.data);

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * (product.quantity || 1);
  }, 0);

  return (
    <div>
      {products.map((product) => (
        <OperationDisplay key={product.id} product={product} />
      ))}
      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ProductList;
