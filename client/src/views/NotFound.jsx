import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/products')

    }, [])


    return (
        <></>
    )
}

export default NotFound