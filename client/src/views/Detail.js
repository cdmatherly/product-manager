import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    const linkStyle = {
        margin: '2rem 10rem',
        textAlign: 'end',
        fontSize: '1.1em'
    }

    const divStyle = {
        margin: '10rem auto',
        maxWidth: '50%',
        textAlign: 'center'
    }

    const titleStyle = {
        fontWeight: 'bold'
    }

    return (
        <>
            <div style={linkStyle}>
                <Link to='/products'>Home</Link>
            </div>
            <div style={divStyle}>
                <h1>{product.title}</h1>
                <p><span style={titleStyle}>Price:</span> {product.price}</p>
                <p><span style={titleStyle}>Description:</span> {product.description}</p>
            </div>
        </>
    )
}

export default Detail;

