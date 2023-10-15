import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header/Header'
import Bebidas from './Pages/Bebidas/Bebidas'
import Cafes from './Pages/Cafes/Cafes'
import Comidas from './Pages/Comidas/Comidas'
import Desayunos from './Pages/Desayunos/Desayunos'
import Reposteria from './Pages/Reposteria/Reposteria'
import { RegisterPage } from "./Pages/Register/registerPage";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { ProductFormPage } from "./Pages/ProductFormPage/ProductFormPage";
import { ProductProvider } from "./context/ProductContext";
import { HomePage } from "./Pages/HomePage/HomePage";


function App() {

  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Desayunos" element={<Desayunos />} />
          {/* <Route path="desayunos" element={<Desayunos />} /> */}
          <Route path="cafes" element={<Cafes />} />
          <Route path="reposteria" element={<Reposteria />} />
          <Route path="comidas" element={<Comidas />} /> 
          <Route path="bebidas" element={<Bebidas />} />
          <Route path="crear-producto" element={<ProductFormPage />} />
          <Route path="actualizar-producto/:id" element={<ProductFormPage />} />
          <Route path="registro" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
    </AuthProvider>
  )
}

export default App
