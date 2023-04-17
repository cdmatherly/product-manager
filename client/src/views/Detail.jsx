import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()

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

    const link2Style ={
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem'
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
                <div style={link2Style}>
                    <Link to={`/products/${product._id}/edit`}>Edit</Link>
                    <DeleteButton productId={product._id} successCallback={(e)=>{navigate(`/products`)}}/>
                </div>
            </div>
        </>
    )
}

export default Detail;

