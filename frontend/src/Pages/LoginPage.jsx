import { useState } from "react";
import APP_API_URL from "../config"

export default function LoginPage({onLogin}){   
    let [loginData, setLoginData] = useState([]);

    let loginFunction = (event)=>{
        event.preventDefault();

        let loginDetails = {
            "userName" : document.getElementById("userName").value,
            "userPass" :  document.getElementById("userPass").value
            }
        
            fetch(`${APP_API_URL}/Login`,{
                method: "POST",
                body: JSON.stringify(loginData),
                headers:{
                    "Content-type": "application/json",  
                }
            })
            .then(res =>{console.log(res.json())
                onLogin();

                document.getElementById("userName").value = "";
                document.getElementById("userPass").value = "";    


            })
            .catch(err => console.log("Error occurred", err));
        
            setLoginData([...loginData,loginDetails]);
        

    }

    
    return (
        <>
        <div className="container-fluid text-center">
            <form>
            <div className="mt-3 mb-3 col-6 mx-auto">
<input type="text" placeholder="Username" id="userName"/></div>
<div className="mb-3 col-6 mx-auto">
<input type="text" placeholder="Password" id="userPass"/></div>
            <button type="submit" className="btn btn-primary" onClick={loginFunction}>Submit</button>
            </form>
        </div>
        </>
    )
}