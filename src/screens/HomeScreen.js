import React from 'react'
import data from '../data'
import {Link} from 'react-router-dom'

function HomeScreen() {
  return (
    <div>
         <h1>
         Featured Products
        </h1>

    <div className='products'>
      {
        data.products.map((product, index) => {
          return (
         <div className='product' key={product.slug}>
            
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className='product-info'>
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <strong>
                <p>{product.price}</p>
              </strong>
              <button>+ Cart</button>
            </div>
            
          </div>
          )
          
        })
       }
    </div>
    </div>
  )
}

export default HomeScreen;