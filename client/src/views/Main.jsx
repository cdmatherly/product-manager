import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [validationErrors, setValidationErrors] = useState(null)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const createProduct = (product) => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>{
                console.log(res)
                setProducts([...products, res.data])
            })
            .catch(err=> {
                console.log(product)
                console.log(err)
                setValidationErrors(err.response?.data?.errors)
            })
    }

    const removeProductFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    const mainStyle = {
        textAlign: 'center',
        maxWidth: '80%',
        margin: '0 auto'
    }

    return (
        <div style={mainStyle}>
			<ProductForm onSubmitProp={createProduct} initTitle="" initPrice="" initDesc="" validationErrors={validationErrors}/>
            <hr/>
            <h1>All Products:</h1>
            {loaded && (<ProductList products={products} removeProductFromDom={removeProductFromDom}/>)}
        </div>
    )
}

export default Main