import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {NavBar} from  './components/NavBar/NavBar'
import {ItemListContainer} from './components/pages/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import CarritoPage from './components/pages/CarritoPage/CarritoPage';
import NotFound404 from './components/NotFound404/NotFound404';
import CartContextProvider from './Context/CartContext';



function App() {
  return (
    <CartContextProvider >
    <BrowserRouter>
       <NavBar/>
       <Routes>
           <Route path='/' element={<ItemListContainer greeting={'BIENVENIDO A KIOSKO'}/> } />
           <Route path='/category/:idCategory' element={<ItemListContainer greeting={'BIENVENIDO A KIOSKO'}/> } />
           <Route path='/Detalle/:idProducto' element={<ItemDetailContainer/>} />
           <Route path='/Carrito' element={<CarritoPage/>} />
           <Route path='*' element= {<Navigate to='/404' />} />
           <Route path ='/404' element={<NotFound404/>}/>
        </Routes>
    </BrowserRouter> 
    </CartContextProvider>
  )
}

export default App;
