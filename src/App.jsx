import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Skills from "./pages/Skills.jsx"

function App() {
    return (
        <Router>
            <Header />
            <div className="absolute top-0">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;