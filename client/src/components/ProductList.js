import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
    
const ProductList = (props) => {
    const { removeFromDom } = props

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

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

    return (
        <div>
            {props.products.map( (product, id) =>
                <div key={id} style={center}>
                    <table style={tableStyle}>
                        <tbody style={listStyle}>
                            <tr style={trStyle}>
                                <td style={titleStyle}>Title:</td>
                                <td>{product.title}</td>
                            </tr>
                            <tr style={trStyle}>
                                <td style={titleStyle}>Price:</td>
                                <td>{product.price}</td>
                            </tr>
                            <tr style={trStyle}>
                                <td style={titleStyle}>Description:</td>
                                <td>{product.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={linkStyle}>
                        <Link to={`/products/${product._id}`}>View</Link>
                        <Link onClick={(event)=>{deleteProduct(product._id)}}>Delete</Link>
                    </div>
                </div>
                
            )}
        </div>
    )
}
    
export default ProductList;

