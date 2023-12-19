import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import ViewCourse from "./Pages/ViewCourse";
import ViewInstance from "./Pages/ViewInstance";
import AddInstance from "./Pages/AddInstance";
import AddCourse from "./Pages/AddCourse";
import MainPage from './Pages/Mainpage';

function App() {
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/coursesView">View Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/coursesAdd">Add Course</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/instancesAdd">Add Instance</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/instancesView">View Instance</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>


                    <Route path="/" element={<MainPage />} />

                    <Route path="/coursesView" element={<ViewCourse />} />

                    <Route path="/coursesAdd" element={<AddCourse />} />

                    <Route path="/instancesAdd" element={<AddInstance />} />

                    <Route path="/instancesView" element={<ViewInstance />} />
                </Routes>

            </Router>
        </>
    );
}

export default App;