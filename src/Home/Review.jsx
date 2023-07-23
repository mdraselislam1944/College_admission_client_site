import React, { useEffect, useState } from 'react';
import img from "./../assets/g1.jpg";
const Review = () => {
    const [review, setReview] = useState();
    useEffect(() => {
        fetch('https://mr-college-server.vercel.app/getInformation')
            .then(res => res.json())
            .then(result => {
                setReview(result);
            })
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:ms-[5vw] my-5 ms-10'>
            {
                review && review.map(review => <div key={review._id} className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={review.image} alt={img} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">College Name : {review.collegeName}</h2>
                        <h3 className="card-title"> ratings giver:{review.name}</h3>
                        <p>{review.message}</p>
                        <div className="card-actions justify-end">
                            <p className="btn btn-primary"> ratings: {review.rating}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Review;