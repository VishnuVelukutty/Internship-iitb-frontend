import { useState } from "react";
import APP_API_URL from "../config";

export default function RegisterPage(){

    let [registerData, setRegisterData] = useState([]);


    function handleSubmit(event){
        event.preventDefault();


        let registerDetails = {
            userName : document.getElementById("userName"),
            userPass : document.getElementById("userPass"),
            userRePass : document.getElementById("userRePass"),
            userType : event.target.value
        }

        fetch(`${APP_API_URL}/register`,{
            method: "POST",
            body: JSON.stringify(registerDetails),
            headers:{
                "Content-type": "application/json",
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.Success){
                console.log("DATA ADDED");
            }else if(data.Mismatch){
                console.log("Missmatch");
                document.getElementById("userPass").value = "";
                document.getElementById("userRePass").value = "";
            }else{
                console.log("Some error")
            }
        })

   /*      document.getElementById("userName").value = "";
        document.getElementById("userPass").value = "";
        document.getElementById("userRePass").value = "";
         */
        
        
        
        console.log("Details Added :: >>>"+registerDetails)
        setRegisterData(...registerData,registerDetails);
        setRegisterData("");
    }
    
    const option = {
        "Admin" : "A",
        "Teacher" : "T",
        "Student" : "S"
    }
    
    return (
        <>

        <div>
            <form>
                <div><input id="userName" placeholder="Username"></input></div>
                <div><input id="userPass" palceholder="Password"></input></div>
                <div><input id="userRePass" palceholder="Re-Type Password"></input></div>
                <div><select>
                <option value="" defaultValue>Select Semester</option>
                {Object.entries(option).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
                    </select></div>

                    <button type="Submit" onClick={handleSubmit}>Submit</button>

            </form>
        </div>


        </>
    )
}