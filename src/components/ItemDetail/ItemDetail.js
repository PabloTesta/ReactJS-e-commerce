import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({detalles}) => {
  const [isCount,setisCount]=useState(true)
const {addItem,cartList} = useCartContext()


  const onAdd= (cantidad)=>{
    // si quisiera iría un console.log para corroborar que viene "productos seleccionados y su cantidad"
    addItem({...detalles,cantidad})
    setisCount(false)
  }

 

return (
    <div
      key={detalles.id}             
      style={{display:'flex',flexDirection:'row',flexWrap:'wrap', margin:'15px', maxWidth:'25vw'}}
      className='card bg-ligth' 
         >
          <div className="card w-100 mt-5"/>
              <div className="card-header">
                  {`${detalles.name}-${detalles.category}`}
                  </div>
                  <div className="card-body">
                      <img src={`${detalles.foto}`} alt='' className='w-50'/>
                      {`${'$'}${detalles.price}`}
                      </div>
                      <div className="card-body">
                      {`${detalles.stock}${' Unidades disponibles'}`}
                      <div>{`${'Contenido: '}${detalles.contenido}`}</div>
                      
                      </div>
                      

                      { 
                       isCount ? 
                        <ItemCount onAdd={onAdd} stock={detalles.stock} init={1} />
                          
                            :
                            <div >
                                <Link to="/Carrito">
                              <button className="btn btn-outline-success">Terminar Compra</button>
                                </Link>
                                <Link to="/">
                              <button className="btn btn-outline-primary">Seguir comprando </button>
                                </Link>
                            </div>
                                         
                      }
                      
                      <div>
                      </div>
                      </div>)
  
}

export default ItemDetail