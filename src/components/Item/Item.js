import { Link } from "react-router-dom"



export const Item = ({producto}) => {
  
  return (
    
    <div>
        <div
                 
    style={{margin:100}}
    className='col-md-6' 
   >
  <div className="card w-100 mt-5"/>
  <div className="card-header">
     {`${producto.name}-${producto.category}`}
     </div>
     <div className="card-body">
         <img src={`${producto.foto}`} alt='' className='w-50'/>
         {`${'$'}${producto.price}`}
         </div>
         <div className="card-footer">
             <Link to={`/Detalle/${producto.id}`}><button className="btn btn-outline-primary btn-block">
                 Detalle del producto                                  
                 </button>
                 </Link>
                 
         </div>
         </div>
         </div>
  )
}

