import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function EditProduct({ setIsLoaded }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${product._id}`, product)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
        navigate(`/${product._id}`);

    }

    const handleChange = (e) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            [e.target.name]: e.target.value
        }));
    }

    return (
        product && (
            <div className='container d-flex flex-column align-items-center my-4'>
                <h1>Edit Product</h1>
                <form onSubmit={handleSubmit}>
                    <div className='my-3'>
                        <label className='col-4' htmlFor="title">Title: </label>
                        <input className='col-8' type="text" name="title" id="title" onChange={handleChange} value={product.title} />
                    </div>
                    <div className='my-3'>
                        <label className='col-4' htmlFor="price">Price: </label>
                        <input className='col-8' type="text" name="price" id="price" onChange={handleChange} value={product.price} />
                    </div>
                    <div className='my-3'>
                        <label className='col-4' htmlFor="description">Description: </label>
                        <input className='col-8' type="text" name="description" id="description" onChange={handleChange} value={product.description} />
                    </div>
                    <div>
                        <button className='btn btn-primary'>Update</button>
                        <Link className="btn btn-success" to={'/'}>Cancel</Link>
                    </div>
                    
                </form>
            </div>

        )
    );
}

export default EditProduct