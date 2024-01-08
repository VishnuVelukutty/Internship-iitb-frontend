import React from "react";
import { useState,useEffect } from "react";
import APP_API_URL from "../config.js";

const ViewInstance = () => {
    let [instances, setInstances] = useState([]);
    let [sem, setSem] = useState([]);
    let [selectValue, setSelect] = useState([]);
    let [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch semesters when component mounts
        fetch(`${APP_API_URL}/instances`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.Data) {
                    setSem(data.Data);
                } else {
                    console.error("Invalid data format received from the backend");
                }
            })
            .catch((err) => console.log("Error occurred", err));
    }, []); // Empty dependency array ensures this effect runs once when component mounts

    useEffect(() => {
        // Fetch courses when instances or selectValue changes
        if (selectValue && instances.length > 0) {
            const fetchCourses = async () => {
                const courseData = await Promise.all(
                    instances.map(async (instance) => {
                        const response = await fetch(`${APP_API_URL}/courses/${instance.courseId}`);
                        const data = await response.json();
                        return data.Data;
                    })
                );
                setCourses(courseData);
            };

            fetchCourses();
        }
    }, [selectValue, instances]);

    const handleDrop = (event) => {
        event.preventDefault();
        setSelect(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        let year = document.getElementById("year").value;
        // Fetch instances based on selected year and semester
        fetch(`${APP_API_URL}/instances/${year}/${selectValue}`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.Data) {
                    setInstances(data.Data);
                } else {
                    console.error("Invalid data format received from the backend", data);
                }
            })
            .catch((err) => console.log("Error occurred", err));
            
            document.getElementById("year").value = "";
            document.getElementById("selectSem").value = "";

            
        };

    let handleDelete = (inst) => {
        // /instances/{year}/{sem}/{id}
        let year = inst.year;
        let sem = inst.sem;
        let id = inst.instId;

        console.log(typeof(year));
        fetch(`${APP_API_URL}/instances/${year}/${sem}/${id}`,
        {method : "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    })
        .then(res => res.json())
        .then(()=>{console.log("delete Successful"+year+"-"+sem+"-"+id)})
        .catch((err)=>{console.log(err)})
    }


    return (
        <div className="container mt-4">
            <div className="mb-3 d-flex justify-content-center align-items-center col-6">
                <input
                    type="text"
                    className="form-control me-2 small-textbox"
                    id="year"
                    placeholder="Year"
                    aria-describedby="year"
                />

                <div className="col-6 text-center">
                    <select id="selectSem" className="form-select" aria-label="Default select example" onClick={handleDrop}>
                        <option value="" defaultValue>Select Semester</option>
                        {sem.map((course, index) => (
                            <option key={index} value={course.sem}>{course.sem}</option>
                        ))}
                    </select>
                </div>

                <div className="col-auto ms-1">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        List Instance
                    </button>
                </div>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Course Title</th>
                            <th scope="col">Year-Sem</th>
                            <th scope="col">Code</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instances.map((inst, index) => (
                            <tr key={index}>
                                <td>{courses[index] ? courses[index].courseTitle : 'N/A'}</td>                                        
                                <td>{inst.year}-{inst.sem}</td>
                                <td>{courses[index] ? courses[index].courseCode : 'N/A'}</td>
                                <td>
                                    <span className="me-2"><button className="btn btn-outline-secondary" type="button" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg></button></span>
                                    <span><button className="btn btn-outline-secondary" type="button" onClick={() => handleDelete(inst)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg></button></span></td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewInstance;
