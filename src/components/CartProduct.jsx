import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductById } from "../products";

export default function CartProduct(props){
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductById(id)

    return (
        <section className="cartProduct">
        <h4>{productData.name}</h4>
        <span>  <button className="add counter" onClick={()=>cart.addOneToCart(productData.id)}>+</button>
        {quantity}
            <button className="minus counter" onClick={()=>cart.removeOneFromCart(productData.id)}>-</button></span>
        <p className="price">$ {(quantity * productData.price)}</p>
        <button className="remove button" onClick={()=> cart.deleteFromCart(id)}>Remove</button>
        </section>
    )
}