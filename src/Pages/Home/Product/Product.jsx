import React from 'react';
import { Col } from 'react-bootstrap';

const Product = ({pick}) => {
    // console.log(pick);

    const {image, name} = pick;

    return (
            <Col md={4}>
                <img src={image} alt="" className='d-block w-100 mt-4 mb-3'/>
                <h4 className='mb-3'>{name}</h4>
            </Col>
    );
};

export default Product;