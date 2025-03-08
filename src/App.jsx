import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

function App() {
  const root = "/";

  return (
    <Router>
        <Header />
            <div className="absolute top-0">
                <Routes>
                    <Route path={`${root}`} element={<Home />} />
                    <Route path={`${root}/about`} element={<About />} />
                </Routes>
            </div>
    </Router>
  );
}

export default App;
