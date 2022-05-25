import React, { useState, useEffect } from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <>
            <Helmet>
                <title>The Notebook Shop</title>
            </Helmet>
            <div>
                <Slider />
                <div className="cards">
                    <Cardscg title='Art' />
                    <Cardscg title='Stationery' />
                    <Cardscg title='Office' />
                </div>
                <CgDiv />
                <ProductsC />
            </div>
        </>
    )
}

export default Home
