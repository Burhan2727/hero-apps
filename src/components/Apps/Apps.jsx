import React from 'react';
import useApps from '../hooks/useApps';

const Apps = () => {
    const {appsData, loading, error} = useApps()
    return (
        <div>
            <h1>i am appa compo</h1>
        </div>
    );
};

export default Apps;