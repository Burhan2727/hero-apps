import React from 'react';
import errorImg from "../assets/error-404.png"
import { useNavigate } from 'react-router';
const Error = () => {
    const navigate = useNavigate()
    const handleBtn = ()=>{
        navigate("/")
    }
    return (
        <div className='h-screen space-y-5 flex flex-col justify-center items-center'>
            <img className='w-80' src={errorImg} alt="" />
            <h1 className='md:text-5xl lg:text-5xl text-2xl font-semibold'>Opps! 404 page not found</h1>
            <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
            <button onClick={handleBtn} className='btn btn-primary'>Go Back</button>
        </div>
    );
};

export default Error;