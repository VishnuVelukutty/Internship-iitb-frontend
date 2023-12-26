export default function RegisterPage(){
    
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
                <div><select defaultValue={"SELECT TYPE"}>
      for(let x in option){
       <option key={option.key} value={option.value}>{option.key}</option>     
    }
                    </select></div>

            </form>
        </div>


        </>
    )
}