import React from 'react'
import { productsArray, getProductByType } from '../products'

export default function Towers(){
    const gameProducts = getProductByType('game')    
    const gameElement = gameProducts.map((game => {
        return(
        <section key={game.id} className='product-card'>
            {game.name}
        </section>)
    }))
    
    return (
        <div className='games'>
            <h1>Games</h1>
            <div className='products'>
                {gameElement}
            </div>
        </div>
    )
}