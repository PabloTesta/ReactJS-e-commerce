import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getFetch, } from "../../../helpers/getFetch"


 
export const ItemListContainer = ({greeting})=>{
    
    const [ productos, setProductos ]=useState([])
    const [loading,setLoading]=useState([true])
    const {idCategory}=useParams()
    console.log(idCategory);

    useEffect(()=>{
        if (idCategory) {
            getFetch()
        .then(resSgte=> setProductos(resSgte.filter(products=>products.category===idCategory))) 
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
        } else {
            getFetch()
            .then(resSgte=> setProductos(resSgte)) 
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false)) 
        }
        
    },[idCategory]) 
    
   
    return( 
        <>
        <h1>{greeting}</h1>
        {
            
            loading ?
            <h2>Espere por favor...</h2>
            :
            productos.map (producto => <div
                key={producto.id}             
                style={{margin:100}}
                    className='col-md-6' 
                   >
                    <div className="card w-100 mt-5"/>
                        <div className="card-header">
                            {`${producto.name}-${producto.category}`}
                            </div>
                            <div className="card-body">
                                <img src={`${producto.foto}`} alt='' className='w-50'/>
                                {`${'$'}${producto.precio}`}
                                </div>
                                <div className="card-footer">
                                    <Link to={`/Detalle/${producto.id}`}><button className="btn btn-outline-primary btn-block">
                                        Detalle del producto
                                    </button></Link>
                                    
                                </div>
                                </div>)
        }
    
   </>
    )
}
