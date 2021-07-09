
import { useEffect, useState } from "react"
import "../styleSheets/SignUpModal.css"
import { Button } from "../styled-components/Buttons";
import { useHistory } from "react-router";

function SignUpModal({setCurrentUsers, currentUsers}){


  console.log(currentUsers);
    const history = useHistory()
    
 
    function formSubmit(e){
        e.preventDefault()
        const formEl = e.target
        const userToSignIn = {
            firstname: formEl.firstName.value,
            lastname: formEl.lastName.value,
            DOB: formEl.dateofbirth.value,
            email: formEl.email.value,
            password: formEl.password.value

        }
       fetch("http://localhost:4000/userprofile",{
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(userToSignIn)
       }).then(resp => {
           if(resp.ok){
               setCurrentUsers([...currentUsers, userToSignIn])
               history.push("/home")
           }
       })

    }

    return (
       
              <div className="modal">
                  <div className=" buttonContainer">
                      <Button onClick={() => history.push("/home")} button className="modalButton">X</Button>
                  </div>
                  <div className="modalContainer">
                      <h2>Sign Up</h2>
                      <form className="signUpForm" onSubmit={formSubmit}>
                        
                          <input type="email" name="email" placeholder="Email" />
                          <input type="text" name="firstName" placeholder="First Name" />
                          <input type="text" name="lastName" placeholder="Seconds Name" />
                          <label htmlFor="dateofbirth">Date Of Birth <input type="date" name="dateofbirth" /></label>
                          
                          <input type="password" name="password" placeholder="Password" />
                          <input type="password" name="retypepassword" placeholder="Re type Password"/>
                    
                          <button>Sign Up</button>
                      </form>
                  </div>
                  </div>
       
      
    )
}
    
export default SignUpModal



