import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;