import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [validationErrors, setValidationErrors] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);
    
    const updateProduct = event => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate(`/products/${id}`)
                setValidationErrors(res?.data?.errors)
            })
            .catch(err => {
                // setValidationErrors(err?.response?.data?.errors)
                console.error(err)
            });
    }

    const divStyle = {
        maxWidth: '80%',
        margin: '5rem auto'
    }
    
    return (
        <div style={divStyle}>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    {validationErrors?.title && (
                        <p style={{ color: 'red', marginLeft: '5px' }}>{validationErrors.title.message}</p>
                    )}
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(event) => { setTitle(event.target.value) }} />
                </div>
                <div>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(event) => { setPrice(event.target.value) }} />
                </div>
                <div>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(event) => { setDescription(event.target.value) }} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

