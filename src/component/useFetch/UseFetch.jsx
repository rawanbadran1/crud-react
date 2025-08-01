import React, { useState ,useEffect } from 'react'
import axios from 'axios'

export default function UseFetch(path) {
    const [users,setUsers] = useState([])
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    const getUser =async ()=>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`)
            setUsers(response.data.users)
        }catch(err){
          setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        getUser();} ,[] )

  return {users, error , isLoading}
}
