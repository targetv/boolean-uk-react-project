import { FaUnderline } from "react-icons/fa"
import { useHistory } from "react-router"

function ProductCard( {ProductItem} ){
    const history  = useHistory()

      

    function productOnSale(){
        
        return(
            <li className="shopCard">
                <a onClick={() =>  {

                    history.push(`/product/${ProductItem.title}/${ProductItem.steamAppID}`) }}>
            <div className="priceContainer">
            <p className={`cardPrice priceOnSale`}>£{ProductItem.normalPrice}</p>
            <p className="cardPrice newPriceAfterSale">£{ProductItem.salePrice}</p>
            <p className="percentageOff">{percentage}% OFF</p>
            <img src={ProductItem.thumb } alt="" />
            <h3 className="gameName">{ProductItem.title}</h3>
            </div>
            </a>
            </li>
            
        )
}
//    console.log("Product Item being passed", ProductItem)


const percentage =  parseFloat(ProductItem.savings).toFixed(0)

  
        return (
            <>
                {ProductItem.isOnSale === "1" ? productOnSale() : 
                <li className="shopCard">
                <a onClick={() =>  {
                    history.push(`/product/${ProductItem.info.title}/${ProductItem.info.steamAppID}`) }}>
                <div className="priceContainer">
                <p className={`cardPrice`}>£{ProductItem.cheapestPriceEver.price}</p>
                <img src={ProductItem.info.thumb } alt="" />
                <h3 className="gameName">{ProductItem.info.title}</h3>
                </div>
      
            </a>
        </li>}
        </>
        )
   
}

export default ProductCard