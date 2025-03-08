import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx"

function App() {
  const root = "/";

  return (
    <Router>
        <Header />
        <Routes>
          <Route path={`${root}`} element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
