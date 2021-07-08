import { useEffect, useState } from "react"
import CartItem from "../components/CartItem"
import "../styleSheets/CartPage.css"
import { Button } from "../styled-components/Buttons"


function CartPage({basket, setBasket}){
    
    const [total, setTotal] = useState(0)

    useEffect(() => {
     let basketItems = basket.map(item => item.price * item.quantity)
    let totalPrice = 0
     basketItems.map(item =>  totalPrice += item) 
     setTotal(totalPrice.toFixed(2))
    }, [])



 
  

    return (
        <main className=" cartPage container">
              <h1>CART</h1>
              <section className="cartSection">
                <ul className="cartItems">
                    {basket.map(item => {
                        return(
                            <CartItem item={item}/>
                        )
                       
                    } )}
                </ul>
                    <div className="checkoutSection">
                    <p className="total">Total Cost £{total}</p>
                    <Button button>CheckOut</Button>
                    </div>
                  
                  {/* map through cart return components */}
              </section>
        </main>
      
    )
}

export default CartPage