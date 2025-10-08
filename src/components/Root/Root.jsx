import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <Banner/>
            <div className='max-w-screen-2xl mx-auto w-full md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;