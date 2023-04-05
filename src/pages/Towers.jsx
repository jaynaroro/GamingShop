import React from 'react'
import { productsArray, getProductByType } from '../products'
import ProductCard from '../components/ProductCard'


export default function Towers(){
    const desktopProducts = getProductByType('desktop')    
    const desktopElement = desktopProducts.map((desktop => {
        return(
        <section key={desktop.id} className='product-card'>
            <ProductCard product={desktop}/>
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