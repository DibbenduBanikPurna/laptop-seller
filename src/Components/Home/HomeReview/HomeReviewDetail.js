import React from 'react';

const HomeReviewDetail = ({review}) => {
    const {name,id,text,rating,img}=review;
    return (
        <div className='col-md-4'>
            <div className='card'>
            <img src={img} alt={id}/>
            <div className='card-body'>
                <h5>{name}</h5>
                <p>{text}</p>
                <h4>Ratting:{rating}</h4>

            </div>
            </div>
            
            
        </div>
    );
};

export default HomeReviewDetail;