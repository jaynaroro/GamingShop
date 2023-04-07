import { CartContext } from "../CartContext"
import { useContext } from "react"

export default function ProductCard(props){
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    return (
        <>
        <img src={product.imageUrl}/>
        <h3>{product.name}</h3>
        <span className="price">${product.price}</span>
        {productQuantity > 0 ? <>
            <div>
            <button className="add counter" onClick={()=>cart.addOneToCart(product.id)}>+</button>
            {productQuantity}
            <button className="minus counter" onClick={()=>cart.removeOneFromCart(product.id)}>-</button>
            </div>
            <button className="button removeFromCart" onClick={()=>cart.deleteFromCart(product.id)}>Remove from Cart</button>
        </> 
        : 
        <button className="button addToCart" onClick={()=>cart.addOneToCart(product.id)}>Add to cart</button>}
        </>
    )
}