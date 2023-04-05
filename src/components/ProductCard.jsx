import { CartContext } from "../CartContext"
import { useContext } from "react"

export default function ProductCard(props){
    const product = props.product
    const cart = useContext(CartContext)

    return (
        <>
        <h3>{product.name}</h3>
        ${product.price}
        <button onClick={()=>cart.addOneToCart(product.id)}>Add to cart</button>
        </>
    )
}