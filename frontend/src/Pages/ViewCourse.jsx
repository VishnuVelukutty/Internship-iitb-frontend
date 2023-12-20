import React from "react";
import { useState } from "react";
import APP_API_URL from "../config.js";
import Modal from "./Modal.jsx";

const ViewCourse = () => {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`${APP_API_URL}/courses`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.Data) {
                    setCourses(data.Data);
                } else {
                    console.error("Invalid data format received from the backend");
                }
            })
            .catch(err => console.log("Error occurred", err));
    }


    let handleDelete = (course) =>{
        let id = course.courseId;
        console.log(id)
        fetch(`${APP_API_URL}/courses/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }

        })
        .then(res => res.json())
        .then(data => {
            if (data && data.Data) {
                setCourses(data.Data);
            } else {
                console.error("Invalid data format received from the backend");
            }
        })
        .catch(err => console.log("Error occurred", err));
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
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <td>{course.courseTitle}</td>
                                <td>{course.courseCode}</td>
                                <td>
                                    <span className="me-2"><button className="btn btn-outline-secondary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg></button></span>



                                    <span><button className="btn btn-outline-secondary" type="button" onClick={()=>handleDelete(course)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg></button></span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewCourse;
