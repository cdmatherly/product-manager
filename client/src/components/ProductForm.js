import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const { initTitle, initPrice, initDesc, onSubmitProp, validationErrors } = props
    const [title, setTitle] = useState(initTitle); 
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDesc);
    // const [validationErrors, setValidationErrors] = useState(null)

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({title, price, description})
        //make a post request to create a new person
        // axios.post('http://localhost:8000/api/products', {
        //     title,
        //     price,
        //     description
        // })
        //     .then(res=>{
        //         console.log(res)
        //         setTitle('')
        //         setPrice('')
        //         setDescription('')
        //     })
        //     .catch(err=> {
        //         console.log(err)
        //         setValidationErrors(err.response?.data?.errors)
        //     })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                {validationErrors?.title && (<p style={{ color: 'red', marginLeft: '5px' }}>{validationErrors.title.message}</p>)}
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                {validationErrors?.price && (<p style={{ color: 'red', marginLeft: '5px' }}>{validationErrors.price.message}</p>)}
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </div>
                {validationErrors?.description && (<p style={{ color: 'red', marginLeft: '5px' }}>{validationErrors.description.message}</p>)}
            <div>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </div>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm