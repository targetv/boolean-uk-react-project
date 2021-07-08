function CartItem({item : {gameName, price, quantity}}){
    const productCost = price * quantity
    return (
        <li>
            <h3>{gameName}</h3> <p>{quantity}</p> <button>+</button> <button>-</button> <p>£{productCost}</p>
        </li> 
    )
}

export default CartItem