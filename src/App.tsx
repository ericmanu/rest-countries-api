import Nav from "./components/Nav";
import Home from "./pages/Home";
import FullCountry from "./pages/FullCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<FullCountry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
