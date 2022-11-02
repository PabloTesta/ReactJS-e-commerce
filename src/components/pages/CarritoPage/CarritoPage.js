import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useCartContext } from '../../../Context/CartContext'
import { Link } from 'react-router-dom';

const CarritoPage = () => {
  const [IdBuy, setIdBuy]= useState('')
const {cartList,vaciarCarrito,precioTotal,removeItem} = useCartContext()
const [dataForm, setDataForm]= useState({
    name:'',
      phone:'',
      email:'',
      email1:''
})
// si quisiera iría un console.log para corroborar que tiene "cartList"  

const generarOrden= async(e)=>{
  e.preventDefault()
  if(dataForm.email===dataForm.email1){ //validación de formulario
    // si quisiera iría un console.log para corroborar que los emails coinciden 

    const orden={
      buyer:{
        nombre:dataForm.name,
        phone:dataForm.phone,
        email:dataForm.email
      },
     items: cartList.map(prod=>{
      const{id, name: title,price}=prod
        return{id,title,price}
        }),
         total: precioTotal() 
         
    }
    const db= getFirestore()
    const orders=collection(db,'orders')
    addDoc(orders,orden)
    .then(resp=>setIdBuy(resp.id))
    .catch(err=>console.log(err))
    
    // si quisiera iría un console.log para corroborar que se generó la orden  
    }else{
      alert('los emails no coinciden');
      //CANCELAR EL SUBMIT Y NO PERMITIR QUE SE GENERE LA ORDEN 
    }
}
const handleInputChange = (e)=>{
    setDataForm({
        ...dataForm,
        [e.target.name]:e.target.value
    })
}
// si quisiera iría un console.log para corroborar que se generó dataForm

  

  return (
    <div>


{IdBuy && <h3>ORDEN GENERADA, SU IDENTIFICACIÓN ES: {IdBuy}</h3>}
{cartList.length === 0 ?
   <div> 
    <h2>El carrito se encuentra Vacío</h2>
    <Link to='/'>Ir a ver productos</Link>
    </div>
    :

<> 
<ul>
  {cartList.map( producto => 
     <li key={producto.id}> {`Producto: ${producto.name}, Cantidad: ${producto.cantidad}, Precio: $ ${producto.price} `} <button onClick={()=>removeItem(producto.id)}><i  className="bi bi-trash2-fill"></i> </button> 
     </li> )}
  </ul>
  { <h2>total: {precioTotal()}</h2> }
  <form onSubmit={generarOrden}>
        <input type='text' name="name" placeholder="Nombre" value={dataForm.name} onChange={handleInputChange} required/>
        <input type='text' name="phone" placeholder="Teléfono" value={dataForm.phone} onChange={handleInputChange} required/>
        <input type='text' name="email" placeholder="Email" value={dataForm.email} onChange={handleInputChange} required/>
        <input type='text' name="email1" placeholder="Email" value={dataForm.email1} onChange={handleInputChange} required/>
          <button type='submit' >Generar Orden</button>                      
            
  </form>
  <button onClick={vaciarCarrito}> Vaciar Carrito</button>
</>
}
    </div>
  )
}

export default CarritoPage