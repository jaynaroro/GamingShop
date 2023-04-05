import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
    return (
        <div className='header'>
            <section className='header-top'>
                <NavLink>Menu</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink>Cart</NavLink>
            </section>
            <section className='header-bottom'>
                <NavLink to="towers">GAMING TOWERS</NavLink>
                <NavLink to="laptops">LAPTOPS</NavLink>
                <NavLink to="games">GAMES</NavLink>
            </section>
        </div>
    )
}