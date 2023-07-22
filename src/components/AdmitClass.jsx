import { Result } from 'postcss';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AdmitClass = () => {
    const id=useLoaderData()._id;
    // console.log(id);
    const navigate=useNavigate();
    const handleAdmission=(event)=>{
        event.preventDefault();
        const form=event.target;
        const admission={
            candidateName:form.candidateName.value,
            Subject:form.Subject.value,
            email:form.email.value,
            phone:form.phone.value,
            address:form.address.value,
            image:form.image.value,
            id:id,
        }
        const imageFile = form.image.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
        fetch('https://api.imgbb.com/1/upload?key=7a43c068c4477f76ae69e0549062c80e', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                admission.image = data.data.display_url;
                fetch("http://localhost:4000/studentsAdd",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json",
                    },
                    body:JSON.stringify(admission),
                })
                .then(res=>res.json())
                .then(result=>{
                    alert("Form fill-up successfully");
                    form.reset();
                    navigate("/myClass");
                })
                .catch(error=>{
                    alert(error);
                })
            }
        );
        console.log(admission);
    }
    return (
        <div className='mx-auto my-10'>
            <h1 className='font-bold text-3xl text-center text-orange-300 my-5'>Enter your information for admission</h1>
            <form  onSubmit={handleAdmission}>
                <div className='flex  items-center justify-center gap-3 my-3'>
                    <input required type="text" name="candidateName" id="candidateName" placeholder='enter Candidate Name' className="input input-bordered w-full max-w-xs" />
                    <input required type="text" name="Subject" id="Subject" placeholder='enter Candidate Subject' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <input required type="email" name="email" id="email" placeholder='enter Candidate email' className="input input-bordered w-full max-w-xs" />
                    <input required type="number" name="phone" id="phone" placeholder='enter Candidate phone number' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <input required type="text" name="address" id="address" placeholder='enter Candidate address' className="input input-bordered w-full max-w-xs" />
                    <input required type="date" name="date" id="date" placeholder='enter Candidate date of birth' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                <input required type="file" name="image" id="image" placeholder='enter Candidate image' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                <input type="submit" value="submit" className="btn input input-bordered w-full max-w-xs" />
                </div>
            </form>
           
        </div>
    );
};

export default AdmitClass;