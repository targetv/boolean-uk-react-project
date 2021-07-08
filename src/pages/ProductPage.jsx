import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import "../styleSheets/ProductPage.css"
import { Button } from "../styled-components/Buttons"


function ProductPage({setBasket, basket}){
    const history = useHistory();
    const [product, setProduct] = useState(null)
    const {steamAppID} = useParams()
   useEffect(() => {
       fetch(`https://www.cheapshark.com/api/1.0/games?steamAppID=${steamAppID}&limit=60&exact=0`).then(resp => resp.json()).then(setProduct)},[steamAppID])


     
    if(product === null ){
        return <main>Loading Data</main>
    }

    console.log(product)

    const price = product.map(item => item.cheapest)
    const gameName = product.map(item => item.internalName)

    const productToCart = {
        price: price.toString(),
        gameName: gameName.toString(),
        quantity: 1
    }
  

    function AddToCart(){
        setBasket([...basket, productToCart])
        console.log(basket)
        history.push("/cart")
        
        

    }
  


    return (
        <main>
            <section className="productPage">
                <div className="leftColumn"> 
                <h2 className="productName">{gameName}</h2>
                <h3 className="productPrice">£{price}</h3>
                </div>
                <div className="rightColumn">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione in officiis labore, cum vero voluptatibus eaque suscipit facilis deleniti asperiores autem iusto illum? Veritatis dolor architecto mollitia assumenda explicabo?</p>
                <Button button onClick={() => AddToCart()}>Add TO Cart</Button>
                </div>
               
               
            </section>



        </main>
    )
}

export default ProductPage