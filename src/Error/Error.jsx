import React from 'react';
import errorImg from "../assets/error-404.png"
const Error = () => {
    return (
        <div>
            <img src={errorImg} alt="" />
            <h1>Opps! 404 page not found</h1>
        </div>
    );
};

export default Error;