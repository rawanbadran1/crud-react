import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../component/loader/Loader.jsx'

export default function Index() {

    const [users,setUsers] = useState([])
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    const getUser =async ()=>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_BURL}/users`)
            setUsers(response.data.users)
            //console.log(response.data.users)
        }catch(err){
          setError(err)
        }finally{
            setIsLoading(false)
        }
        
    }
    useEffect(()=>{
        getUser();} ,[] )

    if (isLoading){
        return <Loader/>
    }
    if(error){
        <p className='text-danger'>{error.messagr}</p>
    }
  return (
    <h2>
    {users.map((user)=>
        <div className='user' key={user._id}>
            <h3>{user.userName}</h3>
        </div>
    )}
    </h2>
  )
}
