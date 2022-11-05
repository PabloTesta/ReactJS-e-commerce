import React, { useState } from 'react'

const  ItemCount=({onAdd, stock, init})=> {
const [count,setCount]=useState(init);

const handleAdd=()=>{
  if (count< stock)
    setCount(count + 1)
}

const handleRemove=()=> {
    if (count>init) {
    setCount(count -1 )}
  }
  


const handleOnAdd=()=>{
onAdd(count)
}
  return (
     
    <div  style={{border:'1px solid black', display:'flex', gap:"5px"}} className ="card w-55">
        
        <button className='btn btn-outline-success' style={{margin:"10px"}} onClick={handleAdd}>Sumar +</button>
        <button className='btn btn-outline-danger' style={{margin:"10px"}} onClick={handleRemove}>Quitar -</button>
        <button className='btn btn-outline-primary' style={{margin:"10px"}} onClick={handleOnAdd}>Agregar al carrito</button>
              <div className='badge bg-secondary'>{count}</div>
    </div>
    
    
    
  )
}
export default ItemCount

