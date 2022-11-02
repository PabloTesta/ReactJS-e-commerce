import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


import { ItemList } from "../../ItemList/ItemList"


 
export const ItemListContainer = ({greeting})=>{
    
    const [ productos, setProductos ]=useState([])
    const [loading,setLoading]=useState([true])
    const {idCategory}=useParams()
    
    useEffect(()=>{
        if(idCategory){
        const db=getFirestore()
        const queryCollection= collection(db,'products')
        const queryFilter=query(queryCollection,where('category', '==', idCategory))
        getDocs(queryFilter)
        .then(resp => setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data() })) ))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
        } else {
            const db=getFirestore()
            const queryCollection= collection(db,'products')
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data() })) ))
            .catch(err=>console.log(err))
            .finally(()=> setLoading(false))
        }
        // si quiesiera iría un console.log para corroborar que viene "productos" 
    },[idCategory])
   
    return( 
        <>
        
        <h1>{greeting}</h1>
        {
                        loading ?
            <h2>Espere por favor...</h2>
            : 
            <ItemList productos={productos} />
            
        }
    
   </>
    )
}
