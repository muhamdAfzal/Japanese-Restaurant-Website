import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import Demo from '../Demo/Demo';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className='container'>

            {/* Banner Section */}
            <Banner></Banner>

            {/* Demo Dish Section */}
            <Demo></Demo>

            {/* Top Picks Section */} 
            <Products></Products>

            {/* Top Chef Section */}
            <Chefs></Chefs>
        </div>
    );
};

export default Home;