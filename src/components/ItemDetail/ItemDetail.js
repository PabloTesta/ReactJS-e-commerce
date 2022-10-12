


const ItemDetail = ({detalles}) => {
  return (
    <div
      key={detalles.id}             
      style={{margin:100}}
         className='col-md-3'
         >
          <div className="card w-100 mt-5"/>
              <div className="card-header">
                  {`${detalles.name}-${detalles.category}`}
                  </div>
                  <div className="card-body">
                      <img src={`${detalles.foto}`} alt='' className='w-50'/>
                      {`${'$'}${detalles.precio}`}
                      </div>
                      <div className="card-body">
                      {`${detalles.stock}${' Unidades disponibles'}`}
                      <div>{`${'Contenido: '}${detalles.contenido}`}</div>
                      
                      </div>
                      
                      </div>)
  
}

export default ItemDetail