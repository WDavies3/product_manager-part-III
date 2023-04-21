import {Route, Routes} from 'react-router-dom';
import { Fragment } from 'react';
import Product from "./components/Product";
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
        <Route path='/:id/edit' element={<EditProduct/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
