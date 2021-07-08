import "../styleSheets/ShopPage.css"
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
import { FaUnderline } from "react-icons/fa"

function ShopPage({ShopDeals, setGameSearchInput, gameSearchInput, setDealsShopData, setCurrentGameViewed}){
    const[searchGamesData, setSearchGameData] = useState([])
    const[filteredGameData, setFilteredGameData] = useState([])
    
    function SearchBar(e){
            e.preventDefault()
            setGameSearchInput("")
        }

   useEffect(() => {
       let gameDataIds = []
        gameDataIds  = searchGamesData.map(item => [...gameDataIds, item.gameID])
       const gameIds = gameDataIds.map(item => item.toString())
   },[])

   useEffect(()=> {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameSearchInput}&limit=60&exact=0`)
        .then(resp => resp.json())
        .then(games => {
        const gameIds = games.map(game => game.gameID).toString()
            fetch(`https://www.cheapshark.com/api/1.0/games?ids=${gameIds}`)
                .then(resp => resp.json())
                .then(data => { 
                     const iDontKnow = games.map(game =>  data[game.gameID])
                     setFilteredGameData(iDontKnow)
                })
    })   
   },[gameSearchInput])

   
    let dealsData = ShopDeals
  
    dealsData = dealsData.slice(0,9)
 

   const newData = filteredGameData.filter(item => item !== undefined)


   console.log("NewData", newData)


    
    return(
        <main className="shopPageMain">
            <section className="shopFilter container">
                <ul>
                    <li>
                    {/* Filter Buttons */}
                    </li>
                </ul>
                {/* Input is for search bar that updates state fix mobile friendly */}
                <form onSubmit={SearchBar}>
                <input type="text" className="filterInput" placeholder="Search Games" value={gameSearchInput}  onChange={(e) => setGameSearchInput(e.target.value)}/>
                </form>
                
            </section>
            <section className="shopCardsSection container">
                <ul className="shopCards">
                    
                 {newData.length > 1 ?  newData.map(item =>  <ProductCard ProductItem={item}/> ): dealsData.map(item => {
                     return (
                <ProductCard ProductItem={item}/>)
               })}   
            
                </ul>
            </section>
        </main>
    )
}

export default ShopPage