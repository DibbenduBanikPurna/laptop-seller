import React from 'react';

const ReviewDetail = ({review}) => {
    const {name,id,img,rating,text,}=review;
    return (
        <div className='col-md-4 mt-5'>
            <div className='card'>
                <img  className='img-fluid' src={img} alt={id}/>
            <div className='card-body'>
                <h5>{name}</h5>
                <p className='text-primary'>{text}</p>
                <h5 >Ratting:<span className='text-warning'> {rating}</span ></h5>

            </div>
            </div>
            
            
        </div>
    );
};

export default ReviewDetail;