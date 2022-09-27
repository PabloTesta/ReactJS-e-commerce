import './App.css';
import {NavBar} from  './components/NavBar/NavBar'
import {Contenedor} from './components/ItemListContainer/ItemListContainer'

function App() {
  return <>
   <NavBar/>
  <Contenedor mensaje={'Proximamente habrá algo...'}/>
</>  
}

export default App;
