import { useState } from "react";
import APP_API_URL from "../config"

export default function LoginPage({ onLogin }) {
    let [loginData, setLoginData] = useState([]);

    let loginFunction = (event) => {
        event.preventDefault();

        let loginDetails = {
            "userName": document.getElementById("userName").value,
            "userPass": document.getElementById("userPass").value
        }

        fetch(`${APP_API_URL}/login`, {
            method: "POST",
            body: JSON.stringify(loginDetails),
            headers: {
                "Content-type": "application/json",
            }
        })
        .then(res => res.json() )
        .then(data => {
            // Access keys and values from the JSON data
            for (let key in data) {
                console.log("Key:", key, "Value:", data[key]);
            }

            // Success is the key that is being sent from BE
            if (data.Success) {
                onLogin();
            } else {
                // Handle unsuccessful login (show an error message, etc.)
                // TO DO => Show on the Screen 
                console.log("Login failed:", data.Info);
            }

            // Clear input fields
            document.getElementById("userName").value = "";
            document.getElementById("userPass").value = "";
        })
        .catch(err => console.log("Error occurred", err));
  }

    return (
        <>
            <div className="container-fluid text-center">
                <form>
                    <div className="mt-3 mb-3 col-6 mx-auto">
                        <input type="text" placeholder="Username" id="userName" /></div>
                    <div className="mb-3 col-6 mx-auto">
                        <input type="password" placeholder="Password" id="userPass" /></div>
                    <button type="submit" className="btn btn-primary" onClick={loginFunction}>Submit</button>
                </form>
            </div>
        </>
    )
}