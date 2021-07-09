import Heading from "../styled-components/Heading"
import {FaChevronDown} from "react-icons/fa"


function HomePage(){
 



    return (
        <main className="homepage">
            <section className="image-container grid">
            <img className="slider-image" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
            <div className="imageText">
            <Heading>ONLY THE BEST</Heading>
            <a className="arrowButton" href="#categories">
            <FaChevronDown className="homepageDownArrow"/>
            </a>
            </div>
            </section>

            {/* Toadd Links */}
            <section className="categoriesSection container" id="categories">
                <ul className="categoreisCardsContainer">
                    <li className="categorieCard">
                        <h2 className="categorieTitle">Anime</h2>
                    </li>
                    <li className="categorieCard">
                        <h2 className="categorieTitle">First Person Shooter</h2>
                    </li>
                    <li className="categorieCard">
                        <h2 className="categorieTitle">Sale</h2>
                    </li>
                    <li className="categorieCard">
                        <h2 className="categorieTitle">RPG</h2>
                    </li>
                </ul>
               
            </section>
    
        </main>
        
    )
}

export default HomePage