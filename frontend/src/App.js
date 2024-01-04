import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

import ViewCourse from "./Pages/ViewCourse";
import ViewInstance from "./Pages/ViewInstance";
import AddInstance from "./Pages/AddInstance";
import AddCourse from "./Pages/AddCourse";
import MainPage from "./Pages/Mainpage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from './Pages/RegisterPage';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState("");

    const recieveType = (data) => {
        setUserType(data);
        console.log("Usertype rcvd in app.js >>> " + userType);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };


    /*nav links on the basis of type  */

    const userTypeLinks = {
        A: [
            { to: "/coursesView", label: "View Courses" },
            { to: "/coursesAdd", label: "Add Course" },
            { to: "/instancesAdd", label: "Add Instance" },
            { to: "/instancesView", label: "View Instance" },
            { to: "/register", label: "Register" },
        ],
        T: [
            { to: "/coursesView", label: "View Courses" },
            { to: "/coursesAdd", label: "Add Course" },
            { to: "/instancesAdd", label: "Add Instance" },
            { to: "/instancesView", label: "View Instance" },            
        ],
        S: [
            { to: "/coursesView", label: "View Courses" },
            { to: "/instancesView", label: "View Instance" },

        ],
    };

    return (
        <>
            {isLoggedIn ? (
                <Router>
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                    </li>
                                    {userTypeLinks[userType]?.map((link, index) => (
                                        <li className="nav-item" key={index}>
                                            <Link className="nav-link" to={link.to}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            

                                <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/coursesView" element={<ViewCourse />} />
                        <Route path="/coursesAdd" element={<AddCourse />} />
                        <Route path="/instancesAdd" element={<AddInstance />} />
                        <Route path="/instancesView" element={<ViewInstance />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </Router>
            ) : (
                <LoginPage onLogin={handleLogin} sendType={recieveType} />
            )}
        </>
    );
}

export default App;