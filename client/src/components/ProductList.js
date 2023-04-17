import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';
    
const ProductList = (props) => {
    const { removeProductFromDom } = props

    const titleStyle = {
        fontWeight: 'bold'
    }

    const tableStyle = {
        margin: '0 auto',
        width: '50%'
    }

    const listStyle = {
        marginBottom: '2rem',
        textAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const center ={
        width: '50%',
        margin: '0 auto'
    }

    const trStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }

    const linkStyle ={
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem'
    }


    // Map inside <tbody>
    return (
        <div>
            {props.products.map( (product, id) =>
                <div key={id} style={center}>
                    <table style={tableStyle}>
                        <tbody style={listStyle}>
                            <tr style={trStyle}>
                                <th style={titleStyle}>Title:</th>
                                <td>{product.title}</td>
                            </tr>
                            <tr style={trStyle}>
                                <th style={titleStyle}>Price:</th>
                                <td>{product.price}</td>
                            </tr>
                            <tr style={trStyle}>
                                <th style={titleStyle}>Description:</th>
                                <td>{product.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={linkStyle}>
                        <Link to={`/products/${product._id}`}>View</Link>
                        <DeleteButton productId={product._id} successCallback={(e) => removeProductFromDom(product._id)}/>
                    </div>
                </div>
                
            )}
        </div>
    )
}

export default ProductList;

