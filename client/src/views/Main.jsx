import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const mainStyle = {
        textAlign: 'center',
        maxWidth: '80%',
        margin: '0 auto'
    }

    return (
        <div style={mainStyle}>
			<ProductForm/>
            <hr/>
            <h1>All Products:</h1>
            {loaded && (<ProductList products={products}/>)}
        </div>
    )
}