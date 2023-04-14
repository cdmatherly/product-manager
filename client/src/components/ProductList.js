import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {

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
                    {/* <Link to={`/products/delete/${id}`} /> */}
                </div>
                
            )}
        </div>
    )
}
    
export default ProductList;

