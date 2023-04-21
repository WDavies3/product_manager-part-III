import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => console.error(err));
    };

    return (
        product && (
            <div className='container d-flex flex-column align-items-center'>
                <div className='card col-6 mt-5 mb-2'>
                    <h2 className='card-header'>{product.title}</h2>
                    <div className="card-body">
                        <p className='card-text'>Price: {product.price}</p>
                        <p className='card-text'>Description: {product.description}</p>
                    </div>
                </div>
                <div className='d-flex gap-3'>
                    <Link className="btn btn-warning" to={`/${product._id}/edit`}>Edit</Link>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    <Link className="btn btn-success" to={'/'}>Go Home</Link>
                </div>
            </div>

        )
    );
}

export default ProductDetails