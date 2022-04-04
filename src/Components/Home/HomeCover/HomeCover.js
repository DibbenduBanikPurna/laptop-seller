import React from 'react';
import Cover from '../../../images/laptop cover.jpg'
const HomeCover = () => {
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-5 pt-5 text-start'>
                <h1>Your next laptop</h1>
                <h1>your best laptop</h1>
                <p>we provide latest and well being products.You can purchase any laptop in lowest amount.We provide life time servicing support.</p>
                <button className='btn btn-info'>Live Demo</button>

            </div>

            <div className='col-md-6 mt-2 '>
                <img className='img-fluid' src={Cover} alt=""/>
            </div>

        </div>
       
    </div>
    );
};

export default HomeCover;

