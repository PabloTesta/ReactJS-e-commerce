import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

export const CartWidget = ()=>{
    const {cantidadTotal}= useCartContext()
    return <div >
        {cantidadTotal()!==0 && cantidadTotal()}
        <Link to='/Carrito'><i className="bi bi-cart-plus ubIcono "/></Link>
        </div>
}