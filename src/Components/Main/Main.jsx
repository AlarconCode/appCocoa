/* eslint-disable react/prop-types */

import { FaArrowUp } from "react-icons/fa6";

function Main({ data, category }) {
  return (
    <main>
      <div id={category} className="space"></div>
      
      {/* 1. CORRECCIÓN DE TYPO Y LÓGICA DE TÍTULO */}
      <h1>{
        category === 'Cafes' ? 'Café 100% Arábigo' : 
        category === 'Reposteria' ? 'Repostería' : 
        category
      }</h1>

      {data.map((product, index) => {
        // 2. NORMALIZACIÓN: Ignoramos mayúsculas y espacios invisibles
        const isMatch = category.trim().toLowerCase() === product.cat.trim().toLowerCase();
        
        return isMatch ? (
          // 3. KEY SEGURA: Usamos el index porque el JSON no trae ID
          <div key={index} className='product-container'>
            <h3 className='desc'>{product.desc}</h3>
            
            {/* 4. RENDERIZADO CONDICIONAL: No pintamos el <p> si está vacío */}
            {product.ingredientes && (
              <p className="ingredientes">{product.ingredientes}</p>
            )}
            
            <h3 className='price'>{product.price}</h3>
          </div>
        ) : null;
      })}

      <a href="#Desayunos">
        <div className='up'><FaArrowUp /></div>
      </a>
    </main>
  );
}

export default Main;