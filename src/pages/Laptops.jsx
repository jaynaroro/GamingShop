import React from 'react'
import { productsArray, getProductByType } from '../products'

export default function Laptops(){
    const laptopProducts = getProductByType('laptop')    
    const laptopElement = laptopProducts.map((laptop => {
        return(
        <section key={laptop.id} className='product-card'>
            {laptop.name}
        </section>)
    }))
    
    return (
        <div className='laptops'>
            <h1>Gaming Laptops</h1>
            <div className='products'>
                {laptopElement}
            </div>
        </div>
    )
}