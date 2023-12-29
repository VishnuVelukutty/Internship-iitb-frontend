import { useState} from "react";
import APP_API_URL from "../config.js";

export default function AddInstance() {
    let [instanceData, setInstance] = useState([]);
    let [courses, setCourses] = useState([]);
    let [selectValue, setSelect] = useState([]);

    let handleDrop = (event) => {
        event.preventDefault();
        fetch(`${APP_API_URL}/courses`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json()
            )
            .then(data => {
                if (data && data.Data) {
                    setCourses(data.Data);
                    console.log(data)
                } else {
                    console.error("Invalid data format received from the backend");
                }
            })
            .catch(err => console.log("Error occurred", err));
            setSelect(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        let addInstanceData = {
            year: document.getElementById("Year").value,
            sem: document.getElementById("Semester").value,
            courseId: selectValue
        };
        fetch(`${APP_API_URL}/instances`, {
            method: "POST",
            body: JSON.stringify(addInstanceData),
            headers: {
                "Content-type": "application/json",
            }
        })
            .then(res => { console.log("response from backend", res) 
        
        
            document.getElementById("Year").value = "";
            document.getElementById("Semester").value = "";
            document.getElementById("courseName").value = "";

  
        })
            .catch(err => { console.log("Error occured", err) })
        setInstance([...instanceData, addInstanceData]);
    };
    return (
        <div className="container mt-4">
            <form className="row g-3 justify-content-center">
                <div className="col-6 text-center">
                    <select id="courseName" className="form-select" aria-label="Default select example" onClick={handleDrop}>
                        <option value="" defaultValue>Select course</option>
                        {courses.map((course, index) => (
                            <option key={index} value={course.courseId}>{course.courseTitle}</option>
                        ))}
                    </select>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                        Refresh
                    </button>
                </div>
                <div className="col-6 mt-3">
                    <input type="text" className="form-control" id="Year" placeholder="Year" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" id="Semester" placeholder="Semester" />
                </div>
                <div className="col-12 mt-3 text-center"> {/* Centering the button */}
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Add Instance
                    </button>
                </div>
            </form>
        </div>
    );
}
