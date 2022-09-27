import { CartWidget } from "../CartWidget/CartWidget";
import "../Styles.css"
const Lista = ()=>{
return (
<ul className="ul">
<li> <a href="#" className="link">Bebidas</a></li>
<li> <a href="#" className="link">Golosinas</a></li>
<li> <a href="#" className="link">Snacks</a></li>
<li> <a href="#" className="link">Cigarrillos</a></li>

</ul>);}
export const NavBar = () =>{
    return <nav className="nav">
        <h1>KIOSCO</h1>
        <Lista/>     
        <CartWidget/>
    </nav>
}