import React, {useEffect, useState} from 'react'

function HookuseEffect() {
    const [count, setCoount]=useState(0);
    const [name, setName]=useState('');
    useEffect(()=>{
        console.log('update when counter changed')
        document.title=`Click  ${count} times`
    },[count])
  return (
    <div><h1>HookuseEffect</h1>
    <input type='text' value={name} onChange={(event)=>{
        setName(event.target.value)}}/>
    <button onClick={()=>{setCoount(count+1)}}>
        Click {count} times
    </button>
    </div>
  )
}

export default HookuseEffect