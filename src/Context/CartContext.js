import { createContext, useContext, useState } from "react"

export const CartContext= createContext ([])
export const useCartContext = ()=>useContext(CartContext)


const CartContextProvider = ({children}) => {
  const [cartList, setCartList]=useState([])

  const isInCart=(detalles)=>{
    const index = cartList.findIndex( det=> detalles.id===det.id)
    if(index===-1){
      setCartList([ ...cartList,detalles])
    }else{
       cartList[index].cantidad+=detalles.cantidad
       setCartList([...cartList])
    }
  }

  const addItem= (detalles)=>{
    isInCart(detalles)
  }
const precioTotal=()=>{
  return cartList.reduce((acum,prod)=>acum+(prod.cantidad*prod.price),0)
}
const cantidadTotal=()=>{
  return cartList.reduce((acum,prod)=>acum+=prod.cantidad,0)
}
const removeItem=(id)=>{
  setCartList(cartList.filter(item=>item.id !==id))
}
  const vaciarCarrito = ()=>{
setCartList([])
  }
  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      vaciarCarrito,
      precioTotal,
      cantidadTotal,
      removeItem}}> 
    {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider