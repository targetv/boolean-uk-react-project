
import { useEffect, useState } from "react"
import "../styleSheets/SignUpModal.css"
import { Button } from "../styled-components/Buttons";
import { useHistory } from "react-router";
import { FaUnderline } from "react-icons/fa";
function LogIn({currentUsers}){

    const history = useHistory()
    const [userToSignIn, setUserToSignIn] = useState({})
    console.log("login", currentUsers)

{/* 
User athentication creates a fetch request to sever, and cross checks with the input of the user. 
*/}

    function authentication(){

        const foundUser = currentUsers.find(item => item.email === userToSignIn.email && item.password === userToSignIn.password)
        
        if(foundUser){
             console.log("user logged in")
             alert("User Logged In")
        }
        else{
            console.log("user not found")
            alert("User Not Found")
        }
     }
    


    function formSubmit(e){
        e.preventDefault()
        const formEl = e.target
        setUserToSignIn({
            email: formEl.email.value,
            password: formEl.password.value
        })
        console.log("formsubmit",userToSignIn)
        authentication()
    }


    // That user has a profile and that all the details match
    // whats on the server




    return (
       
              <div className="modal">
                  <div className=" buttonContainer">
                      <Button onClick={() => history.push("/home")} button className="modalButton">X</Button>
                  </div>
                  <div className="modalContainer">
                      <h2>Log In</h2>
                      <form className="signUpForm" onSubmit={formSubmit}>
                        
                          <input type="email" name="email" placeholder="Email" />
                
                         
                          <input type="password" name="password" placeholder="Password" />
                    
                          <button>Log In</button>
                      </form>
                  </div>
                  </div>
       
      
    )
}

export default LogIn

