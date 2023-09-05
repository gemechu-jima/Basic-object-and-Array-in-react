
import React,{ useState } from 'react'

function Basic() {
    const [name, setName]=useState({firstName:"", lastName:""});
  return (
    <div>
        <form>
            <input type='text' 
            value={name.firstName}
            onChange={(event)=>{
                setName({...name, firstName:event.target.value})
            }}/><br/>
            <input type='text' 
            value={name.lastName}
            onChange={(event)=>{
                setName({...name,lastName:event.target.value})
            }}/>
            <h1> FirstNAme :{name.firstName}</h1>
            <h1> LastNAme :{name.lastName}</h1>
        </form>
    </div>
  )
}

export default Basic;