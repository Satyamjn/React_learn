import React, { useEffect, useState } from 'react'

export const Count = () => 
  {
   // let [count,setCount]=useState(0)
   // let [city,Setcity]=useState('Bhopal')
    let [data, setData]=useState([])
  
    useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then((res)=>{
       return res.json()
    }).then((data)=>{
      console.log(data);
      setData(data.recipes)
    })
  },[])
    

    // function fun2(){
    //     Setcity('Delhi')
    // }
    // function fun(){
    //     setCount(count+1)
    // }
   

  return(
    <div>
        {/* <p>counnt hai {count}</p>
        <button onClick={fun}>click me</button>

        <p>city is {city}</p>
        <button onClick={fun2}>Change</button> */}

        {
        data.map((a)=>{
        return (a.name)
        })
        }

        
    </div>
  )
}




