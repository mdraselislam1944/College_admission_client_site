import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditStudentInformation = () => {
    const student = useLoaderData();
    const handleAdmission=(event)=>{
        event.preventDefault();
        const form=event.target;
        const admission={
            candidateName:form.candidateName.value,
            Subject:form.Subject.value,
            email:form.email.value,
            phone:form.phone.value,
            address:form.address.value,
            date:form.date.value,
            image:form.image.value,
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
                // console.log(admission);
                fetch(`https://mr-college-server.vercel.app/updateStudent/${student?._id}`,{
                    method:"PATCH",
                    headers:{
                        "content-type":"application/json",
                    },
                    body:JSON.stringify(admission),
                })
                .then(res=>res.json())
                .then(data=>{
                    alert("update successfully");

                })
                .catch(message=>{
                    alert("error something is wrong");
                })
            }
        );
    }
    // console.log(student);
    return (
        <div className='mx-auto my-10'>
            <h1 className='font-bold text-3xl text-center text-orange-300 my-5'>you can change information for admission</h1>
            <form  onSubmit={handleAdmission}>
                <div className='flex  items-center justify-center gap-3 my-3'>
                    <input defaultValue={student.candidateName} required type="text" name="candidateName" id="candidateName" placeholder='enter Candidate Name' className="input input-bordered w-full max-w-xs" />
                    <input defaultValue={student.Subject} required type="text" name="Subject" id="Subject" placeholder='enter Candidate Subject' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <input defaultValue={student.email} required type="email" name="email" id="email" placeholder='enter Candidate email' className="input input-bordered w-full max-w-xs" />
                    <input defaultValue={student.phone} required type="number" name="phone" id="phone" placeholder='enter Candidate phone number' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <input defaultValue={student.address} required type="text" name="address" id="address" placeholder='enter Candidate address' className="input input-bordered w-full max-w-xs" />
                    <input defaultValue={student.date}  required type="date" name="date" id="date" placeholder='enter Candidate date of birth' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                <input required  type="file" name="image" id="image" placeholder='enter Candidate image' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                <input type="submit" value="submit" className="btn input input-bordered w-full max-w-xs" />
                </div>
            </form>
           
        </div>
    );
};

export default EditStudentInformation;