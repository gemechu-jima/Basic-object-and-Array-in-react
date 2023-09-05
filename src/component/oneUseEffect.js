import React, { useEffect, useState } from 'react'

function OneUseEffect() {
    const[x, setX]=useState(0)
    const[y, setY]=useState(0)

    const logmouse=(event)=>{
        console.log('updated X and Y');
        
        setX(event.clientX);
        setY(event.clientY)
    }
    useEffect((event)=>{
        console.log("window Activite");
        
        window.addEventListener('mousemove', logmouse)
    },[])
  return (
    <div>
        <h1>run one useEffect</h1>
        <h1> X-:{x} Y-:{y}</h1>

    </div>
  )
}

export default OneUseEffect