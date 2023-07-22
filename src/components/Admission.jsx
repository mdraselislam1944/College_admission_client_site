import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Colleges from './Colleges';

const Admission = () => {
    let count=1;
    const data=useLoaderData();
    const navigate=useNavigate();
    const handleAdmit=(id)=>{
        navigate(`/admitCollege/${id}`)
    }
    return (
        <div className="overflow-x-auto text-2xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th className='text-3xl'>#</th>
              <th>CollegeName</th>
              <th>Admission start</th>
              <th>Admission end</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                data?.map(College=><tr key={College._id}>
                    <th>{count++}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={College.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                            <h1>{College.collegeName}</h1>
                        </div>
                      </div>
                    </td>
                    <td>{College.start}</td>
                    <td>{College.end}</td>
                    <th>
                      <button onClick={()=>handleAdmit(College._id)} className="btn ">Admit</button>
                    </th>
                  </tr>)
            }
          </tbody>          
        </table>
      </div>
    );
};

export default Admission;