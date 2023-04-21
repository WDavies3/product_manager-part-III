import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListProducts({ productList, setIsLoaded }) {

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setIsLoaded(false);
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className='border-top py-3 container d-flex flex-column align-items-center'>
            <h2>All Products:</h2>
            <table>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, i) => {
                        return (
                            <tr key={product._id}>
                                <td><Link to={`/${product._id}`}>{product.title}</Link></td>
                                <td><Link className="btn btn-warning" to={`/${product._id}/edit`}>Edit</Link></td>
                                <td><button className="btn btn-danger" onClick={()=>deleteProduct(product._id)}>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>



        </div>
    )
}

export default ListProducts