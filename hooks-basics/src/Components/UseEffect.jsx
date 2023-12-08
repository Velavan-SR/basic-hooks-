/* eslint-disable no-unused-vars */
import React , {useEffect, useState}  from 'react'

const UseEffect = () => {

  const[age,setAge] = useState(0)
  const[sib,setSib] = useState(0)
    
    useEffect(()=>{
        alert(`My age is ${age}`)
        alert(`My sib is ${sib}`)
    },[age,sib])
    

  return (
    <>
      <button onClick={()=>setAge((prev)=>prev+1)}>age</button>
      <button onClick={()=>setSib((prev)=>prev+1)}>sib</button>
    </>
  )
}

export default UseEffect
