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
        .then(res => res.json())
        .then(data => {
            // Access keys and values from the JSON data
            for (let key in data) {
                console.log("Key:", key, "Value:", data[key]);
            }

            // Check if the login was successful based on the response
            if (data.success) {
                onLogin(); // Call onLogin only if login is successful
                // You may want to redirect the user or perform other actions here
            } else {
                // Handle unsuccessful login (show an error message, etc.)
                console.log("Login failed:", data.message);
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
                        <input type="text" placeholder="Password" id="userPass" /></div>
                    <button type="submit" className="btn btn-primary" onClick={loginFunction}>Submit</button>
                </form>
            </div>
        </>
    )
}