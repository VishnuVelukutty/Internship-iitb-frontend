import { useState } from "react";
import APP_API_URL from "../config";

export default function RegisterPage() {

    function handleSubmit(event) {
        event.preventDefault();


        let registerDetails = {
            userName: document.getElementById("userName").value,
            userPass: document.getElementById("userPass").value,
            userRePass: document.getElementById("userRePass").value,
            userType: document.getElementById("userType").value
        }

        fetch(`${APP_API_URL}/register`, {
            method: "POST",
            body: JSON.stringify(registerDetails),
            headers: {
                "Content-type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.Success) {
                    console.log("DATA ADDED");
                } else if (data.Mismatch) {
                    console.log("Missmatch");
                    document.getElementById("userPass").value = "";
                    document.getElementById("userRePass").value = "";
                } else if (data.Failed) 
                {
                    console.log("Already Exists");
                    document.getElementById("userName").value = "";

                }
                 else {
                    console.log("Some error")
                } 
            })
            .catch(err => { console.log("Error occured", err) });

        document.getElementById("userName").value = "";
        document.getElementById("userPass").value = "";
        document.getElementById("userRePass").value = "";
        document.getElementById("userType").value = "";
    }

    const option = {
        "Admin": "A",
        "Teacher": "T",
        "Student": "S"
    }

    return (
        <>

            <div className="container-fluid text-center">
                <form>
                    <div className="mt-3 mb-3 col-6 mx-auto"><input id="userName" placeholder="Username"></input></div>
                    <div className="mt-3 mb-3 col-6 mx-auto"><input id="userPass" placeholder="Password"></input></div>
                    <div className="mt-3 mb-3 col-6 mx-auto"><input id="userRePass" placeholder="Re-Type Password"></input></div>
                    <div className="mt-3 mb-3 col-6 mx-auto dropdown"><select id="userType">
                        <option value="" defaultValue>Select Semester</option>
                        {Object.entries(option).map(([key, value]) => (
                            <option key={value} value={value}>
                                {key}
                            </option>
                        ))}
                    </select></div>

                    <button type="Submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                </form>
            </div>


        </>
    )
}