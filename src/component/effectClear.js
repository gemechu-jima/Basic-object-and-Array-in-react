import React, { useState } from 'react'
import OneUseEffect from './oneUseEffect'

function EffectClear() {
    const [display, setDisplay]=useState(true)
  return (
    <div>
        <h1>effectClear</h1>
        <button onClick={()=>{
            setDisplay(!display)
        }}>Toggle</button>
        {display && <OneUseEffect/>}
        </div>
  )
}

export default EffectClear