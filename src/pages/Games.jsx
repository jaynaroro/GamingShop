import React from 'react'
import { productsArray, getProductByType } from '../products'
import ProductCard from '../components/ProductCard'

export default function Towers(){
    const gameProducts = getProductByType('game')    
    const gameElement = gameProducts.map((game => {
        return(
        <section key={game.id} className='product-card'>
            <ProductCard product={game} />
        </section>)
    }))
    
    return (
        <div className='games'>
            <div className='products'>
                {gameElement}
            </div>
        </div>
    )
}