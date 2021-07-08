import {Button} from "../styled-components/Buttons"
import {FaShoppingBasket} from "react-icons/fa"
import {Link} from "react-router-dom"
function Header(){
    return (
        <header className="container border">
            <nav>
                <ul className="left-column">
                    <li>  
                    <Button to="/home">Home</Button>  
                    </li>
                    <li>  
                    <Button to="/shop">Shop</Button>
                    </li>
                    <li>
                    <Button>Categories</Button>
                    </li>
                </ul>
            </nav>
            <section className="right-column">
            <ul>
                    <li>
                       <Button button>Login</Button>
                    </li>
                    <li>
                    <Button button>SignUp</Button>
                    </li>
                    <li className="cart">
                        <Link to="/cart"><FaShoppingBasket className="shopping-cart"/></Link>
                    
                    </li>
                   
                </ul>
                
            </section>
        </header>
    )
}
export default Header

