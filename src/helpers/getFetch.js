  const products = [
    {id:'1',name:'Coca-Cola', precio:280,stock:15, category:'bebidas',foto:'https://s4d-images.telepizza.es/Products/Original/Botella_2L__Coca-Cola-909.jpg',contenido:'2.25 litros.'},
    {id:'2',name:'Sprite', precio:280,stock:10, category:'bebidas',foto:'https://www.cocacola.es/content/dam/one/es/es2/sprite/home-page/sprite-1-5-l.jpg',contenido:'2.25 litros.'},
    {id:'3',name:'Sugus', precio:100 ,stock:15, category:'golosinas',foto:'https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000002000/2075.jpg',contenido:'50 gramos.'},
    {id:'4',name:'Marroc', precio:80,stock:20, category:'golosinas',foto:'https://cotillongonic.com.ar/wp-content/uploads/2020/07/150_envuelto.jpg',contenido:'1 Unidad.'},
    {id:'5',name:'Lays', precio:380,stock:15, category:'Snacks',foto:'https://jumboargentina.vtexassets.com/arquivos/ids/673708/Papas-Fritas-Lays-Clasicas-145g-1-858771.jpg?v=637710542655400000',contenido:'145 gramos.'},
    {id:'6',name:'Palitos', precio:180,stock:17, category:'Snacks',foto:'https://www.krachitos.com.ar/wp-content/uploads/2015/09/Palitos-1.png',contenido:'25 gramos.'},
  ]
export const getFetch = ()=>{
    return new Promise ((res , rej)=>{
        setTimeout(()=>{
            res (products)
            
        },2000)
        
    })
}