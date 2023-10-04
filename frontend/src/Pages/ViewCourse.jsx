import React from "react";

const ViewCourse = () => {
    return (
        <div className="container mt-4 text-center">
            <button className="btn btn-primary mb-3">List Courses</button>
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
                        {/* Your table body content goes here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewCourse;
