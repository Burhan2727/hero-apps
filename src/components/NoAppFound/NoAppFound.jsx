import React from 'react';
const NoAppFound = () => {
    return (
        <div className='space-y-5 flex flex-col justify-center items-center'>            
            <h1 className='text-4xl font-semibold'>App Not Found</h1>
            <p className='text-sm text-gray-500'>The app you are loaking for does not exist or has been removed</p>
            <button className='btn btn-neutral'>Back To Home</button>
        </div>
    );
};

export default NoAppFound;