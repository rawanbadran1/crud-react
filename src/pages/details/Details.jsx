import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch  from '../../component/useFetch/UseFetch'
import Loader from '../../component/loader/Loader'

export default function Details() {

    const {id} = useParams()
    const{error,isLoading,data} = UseFetch(`users/${id}`);
        console.log(data.user)

    if (isLoading){return <Loader/>}
    if(error){return <p className='text-danger'>{error.message}</p>}
    
    return (
    <>
         <div>
            <p>{data.user._id}</p>
            <p>{data.user.userName}</p>
            <p>{data.user.email}</p>
            <p>{data.user.phone}</p>
        </div>
    </>
  )
}
