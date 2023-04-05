import React from 'react'
import { productsArray, getProductByType } from '../products'

export default function Towers(){
    const desktopProducts = getProductByType('desktop')    
    const desktopElement = desktopProducts.map((desktop => {
        return(
        <section key={desktop.id} className='product-card'>
            {desktop.name}
        </section>)
    }))
    
    return (
        <div className='desktops'>
            <div className='products'>
                {desktopElement}
            </div>
        </div>
    )
}