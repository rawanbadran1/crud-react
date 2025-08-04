import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../component/loader/Loader.jsx'
import UseFetch from '../../component/useFetch/UseFetch.jsx'
import { Link } from 'react-router-dom'

export default function Index() {

    const{error,isLoading,data ,setData} = UseFetch('users');

    if (isLoading){
        return <Loader/>
    }
    if(error){
        return <p className='text-danger'>{error.message}</p>
    }

    const remove = async (id)=>{
      try{
        const response = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
         const newUsers =data.users.filter(user =>{
        return user._id != id
      });
      const new1 = {
        message:"success",
        users:newUsers
      }
      setData(new1)

      }catch(err){
        console.log(err)
      }
      
    }
    if (isLoading){return <Loader/>}
        if(error){return <p className='text-danger'>{error.message}</p>}
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
            {data.users.map((user) => (
                <tr key={user._id}>
              <td >{user._id} </td >
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className='d-flex gap-3'>
                <Link to={`/Details/${user._id}`} className='btn btn-outline-primary'> Details</Link>
                <button onClick={()=>remove(user._id)} className='btn btn-outline-danger' >Delete</button>
              </td>
               
              </tr>
            ))}  
        </tbody>
      </table>
    </>
  );
}
