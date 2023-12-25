    import './App.css';
    import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
    import { useState } from 'react';

    import ViewCourse from "./Pages/ViewCourse";
    import ViewInstance from "./Pages/ViewInstance";
    import AddInstance from "./Pages/AddInstance";
    import AddCourse from "./Pages/AddCourse";
    import MainPage from "./Pages/Mainpage";
    import LoginPage from "./Pages/LoginPage";

    function App() {

        const [isLoggedIn, setIsLoggedIn] = useState(false);

            // Function to simulate login (you should implement your actual login logic here)
            const handleLogin = () => {
                // For demonstration purposes, set isLoggedIn to true
                setIsLoggedIn(true);
            };
        
            // Function to simulate logout (you should implement your actual logout logic here)
            const handleLogout = () => {
                // For demonstration purposes, set isLoggedIn to false
                setIsLoggedIn(false);
            };
        

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

                                <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        {/* Display LoginPage if user is not logged in */}
                        {!isLoggedIn && <Route path="/" element={<LoginPage onLogin={handleLogin} />} />}
                        
                        {/* Protect other routes by checking isLoggedIn */}
                        {isLoggedIn && <Route path="/" element={<MainPage />} />}
                        {isLoggedIn && <Route path="/coursesView" element={<ViewCourse />} />}
                        {isLoggedIn && <Route path="/coursesAdd" element={<AddCourse />} />}
                        {isLoggedIn && <Route path="/instancesAdd" element={<AddInstance />} />}
                        {isLoggedIn && <Route path="/instancesView" element={<ViewInstance />} />}
                    </Routes>

                </Router>
            </>
        );
    }

    export default App;