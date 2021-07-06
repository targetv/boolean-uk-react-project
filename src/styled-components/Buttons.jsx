import styled from "styled-components";
import {Link} from "react-router-dom"

 const Button = styled(Link)`
color:  ${props => props.button ? "white" : "var(--blue)" };
background-color:  ${props => props.button ? "var(--blue)" : "white" };
padding:   ${props => props.button ? "10px 20px 10px 20px" : "0px" };
border-radius: 18px;
font-size: 1.1rem;
text-decoration: none;

`;

export {
    Button,
}


