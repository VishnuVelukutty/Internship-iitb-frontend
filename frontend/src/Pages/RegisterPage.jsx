export default function RegisterPage(){

    function handleSubmit(event){
        event.preventDefault();
        console.log("Button Clicked");
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
                <div><input placeholder="Username"></input></div>
                <div><input palceholder="Password"></input></div>
                <div><input palceholder="Re-Password"></input></div>
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