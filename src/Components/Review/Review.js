import React,{useEffect, useState} from 'react';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)

        })
    },[])
    return (
        <div className='container'>
            <h2 className='mt-4 text-info'>What our customer say!</h2>
            <div className='row'>
                {
                    review.map((review)=>{
                        return <ReviewDetail key={review.id} review={review}/>
                    })
                }
            </div>
        </div>
    );
};

export default Review;