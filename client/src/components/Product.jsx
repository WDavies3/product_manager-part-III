import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddProductForm from './AddProductForm'
import ListProducts from './ListProducts'

function Product() {
    const [productList, setProductList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((res) => {
                setProductList(res.data);
                setIsLoaded(true);
            })
            .catch((err) => console.error(err));

    }, [productList, isLoaded])
    return (
        <div>
            <AddProductForm setIsLoaded={setIsLoaded} />
            {isLoaded && <ListProducts productList={productList} setIsLoaded={setIsLoaded}/>}
        </div>
    )
}

export default Product