import React from 'react'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'

export default function Header(){
    const [isOpen, setIsOpen] = React.useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <>
        <div className='header'>
            <section className='header-top'>
                <NavLink>Menu</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink onClick={openModal}>Cart</NavLink>
            </section>
            <section className='header-bottom'>
                <NavLink to="towers">GAMING TOWERS</NavLink>
                <NavLink to="laptops">LAPTOPS</NavLink>
                <NavLink to="games">GAMES</NavLink>
            </section>
        </div>
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <h2>Shopping Cart</h2>
            <button onClick={closeModal}>Close</button>
            <section>
                This is the body
            </section>

        </Modal>

        </>
    )
}