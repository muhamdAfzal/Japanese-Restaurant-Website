import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { FidgetSpinner } from 'react-loader-spinner';
import Product from '../Product/Product';

const Products = () => {
    const [picks, setPicks] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://chef-recipe-hunter-server-xrtaseed-gmailcom.vercel.app/dish')
        .then(res => res.json())
        .then(data => setPicks(data))
        .then(setLoading(false))
    }, []);

    if(loading) {
        return <FidgetSpinner></FidgetSpinner>
    };

    return (
        <div className='mt-5 text-center'>
            <h2 className='pt-3'>OUR TOP PICKS</h2>
            <Row>
                {
                    picks.map(pick => <Product
                        key={pick.id}
                    pick={pick}></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;