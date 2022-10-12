import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../../helpers/getFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const {idProducto}=useParams()
  const [detalles, setDetalles]= useState({})
  useEffect(()=>{
    getFetch()
    .then(resSgte=> setDetalles(resSgte.find(products=>products.id===idProducto))) 
    console.log(detalles);
  },[])

  return (
    <div>
      <ItemDetail detalles={detalles}/>
    </div>
  )
}

export default ItemDetailContainer