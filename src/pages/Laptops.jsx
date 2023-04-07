import React from 'react'
import { productsArray, getProductByType } from '../products'
import ProductCard from '../components/ProductCard'

export default function Laptops(){
    const laptopProducts = getProductByType('laptop')    
    const laptopElement = laptopProducts.map((laptop => {
        return(
        <section key={laptop.id} className='product-card'>
            <ProductCard product={laptop} />
        </section>)
    }))
    
    return (
        <div className='laptops'>
            <div className='products'>
                {laptopElement}
            </div>
        </div>
    )
}