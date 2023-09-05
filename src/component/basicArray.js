import React, {useState} from 'react'

function BasicArray() {
  const [items, setItems]=useState([])
  const addItem=()=>{
    setItems([...items, {
      id:items.length,
      value:Math.floor(Math.random()*10+1)
    }])
  }
  return (
    <div>
      <button onClick={addItem}>Additem</button>
     <h2>
        {items.map((item)=>(
          <li key={items.id}>{item.value}</li>
        ))}
    
     </h2>
    </div>
  )
}

export default BasicArray