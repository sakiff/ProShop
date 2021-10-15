import React from 'react'
import products from '../products'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <h3 className="mp-3">Latest Products</h3>
            <Row>
                {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product}/>
                  </Col>  
                ))}
            </Row>
        </>
    )
}

export default HomeScreen