import React from "react";

const ViewInstance = () => {
    return (
        <div className="container mt-4">
            <div className="mb-3 d-flex justify-content-center align-items-center">
                <input type="email" className="form-control me-2" id="exampleInputEmail1" placeholder="Enter email" aria-describedby="emailHelp" />
                <button className="btn btn-secondary dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <button type="button" className="btn btn-primary">
                    List Instance
                </button>
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
                        {/* Table rows with instance data go here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewInstance;
