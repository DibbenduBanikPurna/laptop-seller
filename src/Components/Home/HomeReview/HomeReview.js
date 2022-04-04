import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeReviewDetail from './HomeReviewDetail';


const HomeReview = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)

        })
    },[])
    return (
        <div className='container mt-5 pt-5'>
            <h4 className='text-info'>Customer Reviews ({reviews.length})</h4>
            <br/>
            <div className='row'>
                {
                    reviews.slice(0,3).map((review)=>{
                        return <HomeReviewDetail key={review.id} review={review} />
                    })
                }
            </div>
            <br/>
         <Link to="/reviews"><button className='btn btn-sm btn-primary'>See all reviews</button></Link>   
         <div className='mt-5'></div>
        </div>
    );
};

export default HomeReview;