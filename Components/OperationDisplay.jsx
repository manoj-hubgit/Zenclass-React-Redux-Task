import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProductQuantity, removeProduct } from '../src/Redux/ReduxSlice';

const OperationDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      dispatch(updateProductQuantity({ id: product.id, quantity: newQuantity }));
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateProductQuantity({ id: product.id, quantity: newQuantity }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateProductQuantity({ id: product.id, quantity: newQuantity }));
    }
  };

  const handleDelete = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <div id={`carousel${product.id}`} className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {product.images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={image} className="d-block w-100" alt={`Product ${product.id} - Slide ${index}`} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href={`#carousel${product.id}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href={`#carousel${product.id}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><strong>Price per item:</strong> ${product.price}</p>
            <div className="d-flex align-items-center mb-2">
              <button className="btn btn-primary me-2" onClick={handleDecrement}>-</button>
              <input type="number" min="1" value={quantity} onChange={handleQuantityChange} className="form-control w-25" />
              <button className="btn btn-primary ms-2" onClick={handleIncrement}>+</button>
              <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationDisplay;
