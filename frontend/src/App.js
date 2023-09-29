import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import ViewCourse from "./Pages/ViewCourse";
import ViewInstance from "./Pages/ViewInstance";
import AddInstance from "./Pages/AddInstance";
import AddCourse from "./Pages/AddCourse";
import MainPage from './Pages/MainPage';



function App() {
    return (
        <>
            <Router>

                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/coursesView">View Courses</Link>
                            </li>

                            <li>
                                <Link to="/coursesAdd">Course Add</Link>
                            </li>

                            <li>
                                <Link to="/instancesAdd">Instance Add</Link>
                            </li>

                            <li>
                                <Link to="/instancesView">Instance View</Link>
                            </li>
                        </ul>
                    </nav>
                </div>


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