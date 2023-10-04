import { useState } from "react";

export default function AddInstance() {
    let [instanceData, setInstance] = useState([]);

    let handleSubmit = (event) => {
        event.preventDefault();
        let addInstanceData = {
            year: document.getElementById("Year").value,
            semester: document.getElementById("Semester").value,
        };
        setInstance([...instanceData, addInstanceData]);
    };

    return (
        <div className="container mt-4">
            <form className="row g-3 justify-content-center">
                <div className="col-auto">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Course
                    </button>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                        Refresh
                    </button>
                </div>
                <div className="w-100"></div> {/* New line */}
                <div className="col-auto">
                    <input type="text" className="form-control" id="Year" placeholder="Year" />
                </div>
                <div className="col-auto">
                    <input type="text" className="form-control" id="Semester" placeholder="Semester" />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Add Instance
                    </button>
                </div>
            </form>
        </div>
    );
}
