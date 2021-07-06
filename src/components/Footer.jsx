import {FaCcVisa, FaCcAmex, FaCcMastercard, FaRegCopyright} from "react-icons/fa"

function Footer(){
    return(
        <footer>
            <div className="container footerContainer">
            <ul className="footerCards">
                <li className="footerIcons"><FaCcVisa/></li>
                <li className="footerIcons"><FaCcMastercard/></li>
                <li className="footerIcons"><FaCcAmex/></li>
            </ul>
                    <ul className="copyRight">
                    <li><FaRegCopyright className="footerIcons"/></li>
                    <li><h3>Sean Davison</h3></li>
                    </ul>
                    
                </div>
      
         
        </footer>
    )
}

export default Footer;