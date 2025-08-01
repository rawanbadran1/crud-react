import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../component/loader/Loader.jsx'
import UseFetch from '../../component/useFetch/UseFetch.jsx'

export default function Index() {

    const{error,isLoading,users} = UseFetch('users');

    if (isLoading){
        return <Loader/>
    }
    if(error){
        return <p className='text-danger'>{error.message}</p>
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
