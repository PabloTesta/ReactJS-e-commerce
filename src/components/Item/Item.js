import { Link } from "react-router-dom"



export const Item = ({producto}) => {
  
  return (
    
    <div className="col-md-6">
        <div
                 
    style={{margin:50}}
    className='card col-md-8 ' 
   >
  
  <div className="card-header">
     {`${producto.name}-${producto.category}`}
     </div>
     <div className="card-body">
         <img src={`${producto.foto}`} alt='' className='w-50'/>
         {`${'$'}${producto.price}`}
         </div>
         <div className="card-footer">
             <Link to={`/Detalle/${producto.id}`}><button className="btn btn-outline-info">
                 Detalle del producto                                  
                 </button>
                 </Link>
                 
         </div>
         </div>
         </div>
  )
}

