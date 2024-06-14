import React from 'react';
import { Provider } from 'react-redux';
import OperationUpdate from '../Components/OperationUpdate';
import { store } from './Redux/ReduxStore';
import ProductList from '../Components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <OperationUpdate />
      </div>
    </Provider>
  );
};

export default App;
