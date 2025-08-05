import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export default function Create() {
  const {register,control,handleSubmit}= useForm()
  const Navigate = useNavigate ();

  const registerForm = async(value)=>{
   console.log(value)
    const response = await axios.post(`https://node-react-10.onrender.com/users`,value)
    console.log(response)
    if (response.status === 201)
      toast.success("added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        //transition: Zoom,
      });
      Navigate('/users')
  }

  return (
    <>Add new user
    <form onSubmit={handleSubmit(registerForm)}>
   <div className="form-floating mb-3">
      <input type="text" {...register('userName',{required:'enter your name'})} className="form-control" id="userName" placeholder="user Name" />
      <label htmlFor="userName">User Name</label>
   </div>

   <div className="form-floating mb-3">
      <input type="email" {...register('email',{required:'enter your email'})} className="form-control" id="userEmail" placeholder="name@example.com" />
      <label htmlFor="userEmail">User Email</label>
   </div>
   <div className="form-floating mb-3">
      <input type="password" {...register('password',{required:'enter your password'})} className="form-control" id="userPassword" placeholder="user password" />
      <label htmlFor="userPassword">User password</label>
   </div>
   <div className="form-floating mb-3">
      <input type="text" {...register('phone',{required:'enter your phone'})} className="form-control" id="userPhone" placeholder="user Name" />
      <label htmlFor="userPhone">User phone</label>
   </div>
   <button type='submit' className='btn btn-outline-primary'>Add</button>
   </form>
   <DevTool control={control} />
     </>
  )
}
