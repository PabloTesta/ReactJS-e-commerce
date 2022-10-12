import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "../Styles.css"


const Lista = ()=>{
return (
<ul className="ul">
<li> <NavLink  to='/category/bebidas' className="nav-item nav-link text-center" style={{color:"#596157"}}>Bebidas</NavLink></li>
<li> <NavLink  to='/category/golosinas' className="nav-item nav-link text-center" style={{color:"#596157"}}>Golosinas</NavLink></li>
<li> <NavLink  to='/category/Snacks' className="nav-item nav-link text-center" style={{color:"#596157"}}>Snacks</NavLink></li>



</ul>);}

   export const NavBar = () =>{
    return <nav className="nav">
      <NavLink to='/' className="nav-item nav-link text-center" style={{color:"blueviolet"}}><h1>KIOSCO</h1></NavLink>  
        <Lista/>     
        <CartWidget/>
    </nav>
}