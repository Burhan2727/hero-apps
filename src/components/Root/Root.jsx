import React, { useEffect, useState } from 'react';
import { ToastContainer} from 'react-toastify';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';

const Root = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false)
        }, 300);
        return ()=> clearTimeout(timer)
    }, [location])
    console.log(location)
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='max-w-screen-2xl mx-auto w-full md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
                <div className='flex justify-center items-center'>
                    {loading && <Spinner/>}
                </div>
                <Outlet/>
            </div>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Root;