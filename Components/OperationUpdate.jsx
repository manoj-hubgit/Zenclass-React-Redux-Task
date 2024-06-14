import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from '../src/Redux/ReduxSlice';

const OperationUpdate = () => {
  const dispatch = useDispatch();

  const handleSubtract = () => {
    dispatch(removeProduct(1));
  };

};

export default OperationUpdate;



