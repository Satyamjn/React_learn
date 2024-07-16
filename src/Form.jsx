import React, { useState } from 'react'

function Form() {
    let[input,SetInput]=useState('')
    let [data,Setdata]=useState([])
    
    function fun1(e){
        SetInput(e.target.value)
        console.log(e.target.value);
    }


    function fun(){
        Setdata([...data,input])
        SetInput('')
    }
  return (
    <div>

    <fieldset>
    <legend>Form</legend>
        <p>{data}</p>
    <input type='text' placeholder='enter your name' value={input} onChange={fun1} name='firstname'/>
    <input type='text' placeholder='enter your lastname' value={input} onChange={fun1} name='firstname'/>
    <button onClick={fun}>Submit</button>
    </fieldset>

        
    </div>
  )
}

export default Form