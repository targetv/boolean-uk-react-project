import {Button} from "../styled-components/Buttons"
import {FaShoppingBasket} from "react-icons/fa"
import {Link} from "react-router-dom"
import { useHistory } from "react-router"
function Header(){
    const history = useHistory()
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
                       <Button  onClick={() => history.push("/login")} button>Login</Button>
                    </li>
                    <li>
                    <Button onClick={() => history.push("/signup")} button>SignUp</Button>
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

