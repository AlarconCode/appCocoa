import './App.css'
import Header from './Components/Header/Header'
import Bebidas from './Pages/Bebidas/Bebidas'
import Cafes from './Pages/Cafes/Cafes'
import Comidas from './Pages/Comidas/Comidas'
import Desayunos from './Pages/Desayunos/Desayunos'
import Reposteria from './Pages/Reposteria/Reposteria'
import Tostas from './Pages/Tostas/Tostas'


function App() {

  return (
    <>
      <Header />
      <Desayunos />
      <Tostas />
      <Cafes />
      <Reposteria />
      <Comidas />
      <Bebidas />
    </>
  )
}

export default App
