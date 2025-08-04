import React, { useState ,useEffect } from 'react'
import axios from 'axios'

export default function UseFetch(path) {
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    const getUser =async ()=>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`)
            setData(response.data)
        }catch(err){
          setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        getUser();} ,[] )

  return {data, error , isLoading  , setData}
}
