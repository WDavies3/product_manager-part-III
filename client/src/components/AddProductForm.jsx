import React, { useState } from 'react';
import axios from 'axios';

const initialProduct = {
  title: '',
  price: "",
  description: ''
}

function AddProductForm({setIsLoaded}) {
  const [product, setProduct] = useState(initialProduct);

  const handleChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/products', product)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    setProduct(initialProduct);
    setIsLoaded(false);
  }

  return (
    <div className='container d-flex flex-column align-items-center my-4'>
      <h1>Product Manager</h1>
      <form onSubmit={handleSubmit}>
        <div className='my-3'>
          <label className='col-4' htmlFor="title">Title: </label>
          <input className='col-8'type="text" name="title" id="title" onChange={handleChange} value={product.title} />
        </div>
        <div className='my-3'>
          <label className='col-4' htmlFor="price">Price: </label>
          <input className='col-8' type="text" name="price" id="price" onChange={handleChange} value={product.price} />
        </div>
        <div className='my-3'>
          <label className='col-4' htmlFor="description">Description: </label>
          <input className='col-8' type="text" name="description" id="description" onChange={handleChange} value={product.description} />
        </div>
        <button className='btn btn-primary'>Create</button>
      </form>
    </div>

  )
}

export default AddProductForm