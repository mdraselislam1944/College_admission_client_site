import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyClass = () => {
    let filterCLass;
    const [data, setData] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/studentsClass/mdraselislam1944@gmail.com')
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
    }, [])
    const college = useLoaderData();
    console.log(college);
    if (data) {
        filterCLass = college.find(college => college._id == data[0]?.id);
    }
    console.log(filterCLass);
    return (
        <div>
            {
                filterCLass ? <>
                    <div key={filterCLass._id} className="card lg:card-side bg-base-100 shadow-xl mx-10 my-5 ">
                        <figure><img className='lg:w-[50vw] lg:h-[100vh]' src={filterCLass.image} alt="Album" /></figure>
                        <div className="card-body lg:w-[50vw]">
                            <h2 className="card-title">College Name: {filterCLass.collegeName}</h2>
                            <p><span className='font-bold'>Admission Process: </span>{filterCLass.admissionProcess}</p>
                            <p className='text-center text-xl font-bold'>Admission going on</p>
                            <hr className='font-bold' />
                            <div className='flex items-center justify-between'>
                                <p> Admission Start: {filterCLass.start}</p>
                                <p>Admission  end: {filterCLass.end}</p>
                            </div>
                            <p className='text-center text-xl font-bold'>Events</p>
                            <hr className='font-bold' />
                            {
                                filterCLass.events.map(event => <div key={event.date}>
                                    <li>
                                        <span >Event Name: <span className='text-orange-300'>{event.eventName}</span></span>
                                        <p>Event Date: {event.date}</p>
                                        <p>Event Description: {event.description}</p>
                                    </li>
                                </div>)
                            }
                            <p className='text-center text-xl font-bold'>researchWorks </p>
                            <hr className='font-bold' />
                            {
                                filterCLass.researchWorks.map(event => <div key={event.year}>
                                    <li>
                                        <span >Author Name: <span className='text-orange-300'>{event.author}</span></span>
                                        <p>Research Name: {event.title}</p>
                                        <p>Research Year: {event.year}</p>
                                        <p>Research abstract: {event.abstract}</p>
                                    </li>
                                </div>)
                            }
                            <p className='text-center text-xl font-bold'>sportsCategories </p>
                            <hr className='font-bold' />
                            {
                                filterCLass.sportsCategories.map(event => <div key={event.category}>
                                    <li>
                                        <span >sport Name: <span className='text-orange-300'>{event.category}</span></span>
                                        <p>Sport description: {event.description}</p>
                                    </li>
                                </div>)
                            }
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Admit</button>
                            </div>
                        </div>
                    </div>
                </> : <div className='text-3xl text-center'>Loading.........</div>
            }
        </div>
    );
};

export default MyClass;