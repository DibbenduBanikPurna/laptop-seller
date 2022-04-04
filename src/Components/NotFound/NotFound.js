import React from 'react';
import Error from '../../images/error.jpg'
const NotFound = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 m-auto'>
                    <img className='img-fluid' src={Error} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default NotFound;