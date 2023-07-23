import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import GraduatedImage from '../GraduatedImage';
import Review from '../Review';

const Home = () => {
    const college = useLoaderData();
    // console.log(college);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:ms-[5vw] my-5 ms-10'>
                {
                    college.map(college => <div key={college._id} className="card w-96 glass">
                        <figure><img src={college.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{college.collegeName}</h2>
                            <p className='text-center text-xl font-bold'>Admission going on</p>
                            <hr className='font-bold' />
                            <div className='flex items-center'>
                                <p>  Start: {college.start}</p>
                                <p>  end: {college.end}</p>
                            </div>
                            <p className='text-center text-xl font-bold'>Events</p>
                            <hr className='font-bold' />
                            {
                                college.events.map(event => <div key={event.date}>
                                    <li>event Name: {event.eventName}</li>
                                </div>)
                            }
                            <p className='text-center text-xl font-bold'>Research History</p>
                            <hr className='font-bold' />
                            {
                                college.researchWorks.map(event => <div key={event.year}>
                                    <li>Research Name: {event.title}</li>
                                </div>)
                            }
                            <p className='text-center text-xl font-bold'>Sports</p>
                            <hr className='font-bold' />
                            {
                                college.sportsCategories.map(event => <div key={event.description}>
                                    <li>Sports Name: {event.category}</li>
                                </div>)
                            }
                            <div className="card-actions justify-end">
                                <Link to={`/individualCollege/${college._id}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <GraduatedImage/>
            <Review/>
        </div>
    );
};

export default Home;