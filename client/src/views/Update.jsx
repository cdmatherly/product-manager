import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from '../components/ProductForm';
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState();
    const [validationErrors, setValidationErrors] = useState(null)
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
                setLoaded(true)
                console.log(res)
            })
    }, []);
    
    // const updateProduct = event => {
    //     event.preventDefault();
    //     axios.put(`http://localhost:8000/api/products/${id}`, {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res => {
    //             console.log(res)
    //             navigate(`/products/${id}`)
    //         })
    //         .catch(err => {
    //             setValidationErrors(err.response?.data?.errors)
    //             console.error(err)
    //         });
    // }

    const updateProduct = (product) => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res=>{
                console.log(res)
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
                navigate(`/products/${id}`)
            })
            .catch(err=> {
                console.log(err)
                setValidationErrors(err.response?.data?.errors)
            })
    }

    // const divStyle = {
    //     maxWidth: '80%',
    //     margin: '5rem auto'
    // }
    
    return (
        <>
            {loaded && (
                <ProductForm onSubmitProp={updateProduct} 
                initTitle={title} 
                initPrice={price} 
                initDesc={description} 
                validationErrors={validationErrors}
                />
            )}
        </>

        )
}

export default Update;

