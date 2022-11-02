import {Item} from "../Item/Item"




export const ItemList=({productos})=>{
  
    return(
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}> 
            { productos.map( producto => <Item key={producto.id} producto={producto} /> )}
            
       </div>
       
        
         
    )
}
