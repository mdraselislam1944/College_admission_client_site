import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  let filterCLass;
  const navigate=useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://mr-college-server.vercel.app/college")
        .then(res => res.json())
        .then(result => {
            setData(result);
        })
}, []);
const student = useLoaderData();

if (data) {
  filterCLass = data.find(data => data._id == student[0]?.id);
}
const handleEditForm=(id)=>{
  navigate(`/editInformation/${id}`);
}
  return (
    <div className='mx-auto'>
      <h1 className='text-center text-orange-300 text-3xl'>User Information</h1>
      {
        student[0] ? <>
          {
            <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-[5vw] my-5 ">
              <figure className='lg:w-[30vw]'><img src={student[0].image} alt="Album" /></figure>
              <div className="card-body lg:w-[50vw]">
                <h2 className="card-title">Name: {student[0].candidateName}</h2>
                <p>Address: {student[0].address}</p>
                {
                  filterCLass&&<>
                  <p>College Name: {filterCLass.collegeName}</p>
                  <p>Admission Process: {filterCLass.admissionProcess}</p>
                  </>
                }
                <p>Subject: {student[0].Subject}</p>
                <p>Email: {student[0].email}</p>
                <p>Mobile: {student[0].phone}</p>
                <div className="card-actions justify-end">
                  <button onClick={()=>handleEditForm(student[0]._id)} className="btn btn-primary">Change Information</button>
                </div>
              </div>
            </div>
          }
        </> : <><h1 className='text-3xl text-orange-300 text-center font-bold'>Till now, you can not select any class </h1></>
      }
    </div>
  );
};

export default Dashboard;