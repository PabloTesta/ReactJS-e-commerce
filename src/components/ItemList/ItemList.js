import {Item} from "../Item/Item"




export const ItemList=({productos})=>{
  
    return(
        <div  style={{display:'flex',flexDirection:'row',flexWrap:'wrap', margin:'15px', maxWidth:'100vw'}} className="card bg-dark"> 
            { productos.map( producto => <Item key={producto.id} producto={producto} /> )}
            
       </div>
       
        
         
    )
}
