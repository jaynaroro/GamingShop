import React from 'react'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import CartProduct from './CartProduct'
import headerBG from '../assets/homeBG.gif'

Modal.setAppElement('#root');


export default function Header(){
    const cart = useContext(CartContext)

    const [isOpen, setIsOpen] = React.useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const productsCount = cart.items.reduce((sum, product)=> sum + product.quantity, 0)

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold',
    }

    return (
        <>
        <div className='header' style={{backgroundImage: `url(${headerBG})`}}>
            <section className='header-top'>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/">Home</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} onClick={openModal}>Cart ({productsCount} Items)</NavLink>
            </section>
            <section className='header-bottom'>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="towers">GAMING TOWERS</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="laptops">LAPTOPS</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null}to="games">GAMES</NavLink>
            </section>
        </div>
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <div className='modal'>
            <h2>Shopping Cart</h2>
            <button onClick={closeModal} className='close button'>Back to Store</button>
            <section>
                {productsCount > 0 ? 
                <>
                    {cart.items.map((currentProduct, idx) => { return(
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} ></CartProduct>
                   ) })}

                    <h1>Total: $ {cart.getTotalCost()}</h1>
                    <button className='button purchase'>Purchase Items</button>
                </>: <h1>There are no products in your Cart</h1>}
            </section>
            </div>

        </Modal>

        </>
    )
}