import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const {idProducto}=useParams()
  const [detalles, setDetalles]= useState({})
  const [loading,setLoading]=useState([true])

  useEffect(()=>{
    const db=getFirestore()
    const queryDoc= doc(db,'products',idProducto)
    getDoc(queryDoc)
    .then(resp=>setDetalles({id:resp.id, ...resp.data()}))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  },[idProducto])
  // si quiesiera iría un console.log para corroborar que viene "detalles"  

  
  
  return (
    <div>
      {
        
        loading ?
        <h2>Espere por favor...</h2>
        : 
      <ItemDetail detalles={detalles}/>
      }
    </div>
  )
}

export default ItemDetailContainer