import React, { useEffect, useState } from 'react'

const Count1 = () => {
    let [api,setApi]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes').then((res)=>{
          return res.json()
        }).then((data)=>{
         console.log(data);
          setApi(data.recipes)
        })
     },[Count1])

    
  return (
    <>
    <p>Your api is</p>

       { api.map((e)=>{
            return (e.name)
        })
        }
    </>
  )
}

export default Count1
