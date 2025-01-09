/* eslint-disable react/prop-types */

import { FaArrowUp } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function Main ({data, category}) {
  
  return (
    <main>
      <div id={category} className="space"></div>
      <h1>{
        
        category === 'Cafes' ? 'Café 100% Arábigo' : 
        category === 'Resposteria' ? 'Repostería' : 
        category
                    
        }</h1>

      {data.map((product) => (
        category === product.cat ? 
        <div key={product.id} className='product-container'>
          <h3 className='desc'>{product.desc}</h3>
          <p className="ingredientes">{ product.ingredientes }</p>
          <h3 className='price'>{product.price}</h3>
        </div> :
        null
      ))}
      <a href="#Desayunos"><div className='up'><FaArrowUp /></div></a>

    </main>
  )
}

export default Main