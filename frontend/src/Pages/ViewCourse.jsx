import React from "react";
import { useState } from "react";

const ViewCourse = () => {
    const [courses, setCourses] = useState([]);

    function handleSubmit (event){
        event.preventDefault();
        const data = {}
        fetch("/courses",{
            method : "GET",
            body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json",
			},
        })
        .then(res => {res.json()
        console.log("response",res)}
        )
        .then(data=>setCourses(data))
        .catch(err=>console.log("Error occured",err))
    }


    return (
        <div className="container mt-4 text-center">
            <button className="btn btn-primary mb-3" onClick={handleSubmit}>List Courses</button>
            <div>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">Course Title</th>
                            <th scope="col">Code</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           courses.map(course=>(
                            <tr>
                                <td>{course.courseTitle}</td>
                                <td>{course.courseCode}</td>
                                <td>{course.courseDesc}</td>
                            </tr>
                           )) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewCourse;
