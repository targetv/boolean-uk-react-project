import "../styleSheets/ShopPage.css"

function ShopPage(){
    return(
        <main className="shopPageMain">
            <section className="shopFilter container">
                <ul>
                    <li>
                    {/* Filter Buttons */}
                    </li>
                </ul>
                {/* Input is for search bar that updates state fix mobile friendly */}
                <input type="text" className="filterInput" placeholder="Search Games"/>
            </section>
            <section className="shopCardsSection container">
                <ul className="shopCards">
                    {/* Map and return cards li */}
                    <li className="shopCard">
                        <p>Hello</p>
                    </li>
                    
                </ul>
            </section>
        </main>
    )
}

export default ShopPage