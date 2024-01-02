import { useState } from "react";
import APP_API_URL from "../config.js";

export default function AddCourse() {
    let [courseData, setCourse] = useState([]);

    const handleSubmit = (event) => {
/*  */        event.preventDefault();
        
        let addCourseData = {
            CourseTitle: document.getElementById("CourseTitle").value,
            CourseCode: document.getElementById("CourseCode").value,
            CourseDesc: document.getElementById("CourseDesc").value,
        };

        fetch(`${APP_API_URL}/courses`,{
            method : "POST",
            body: JSON.stringify(addCourseData),
            headers:{
                "Content-type": "application/json",  
            }
        })
        .then(res=>{console.log(res)
        document.getElementById("CourseTitle").value = "";
        document.getElementById("CourseCode").value = "";
        document.getElementById("CourseDesc").value = "";
    }
        )
        .catch(err=>console.log("Error occured",err))



        setCourse([...courseData, addCourseData]);
    };

    console.log(courseData);
    return (
        <div className="container-fluid text-center">
            <div className="row justify-content-center">
                <form>

                <div className="mb-3 col-6 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="CourseCode"
                            aria-describedby="CourseCode"
                            placeholder="Course Code"
                        />
                    </div>
                    
                    <div className="mt-3 mb-3 col-6 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="CourseTitle"
                            aria-describedby="CourseTitle"
                            placeholder="Course Title"
                        />
                    </div>

                    <div className="mb-3 col-6 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="CourseDesc"
                            aria-describedby="CourseDesc"
                            placeholder="Course Description"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Add Course
                    </button>
                </form>
            </div>
        </div>
    );
}
