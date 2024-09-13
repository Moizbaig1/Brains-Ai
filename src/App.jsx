import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// import Home from "./pages/Home"; // Add appropriate page components
// import GenerativeAI from "./pages/GenerativeAI";
// import WebDevelopment from "./pages/WebDevelopment";
// import MobileAppDevelopment from "./pages/MobileAppDevelopment";
// import GetQuotes from "./pages/GetQuotes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/generativeai" element={<GenerativeAI />} />
        <Route path="/fullstackdevelopment" element={<WebDevelopment />} />
        <Route path="/mobileappdevelopment" element={<MobileAppDevelopment />} />
        <Route path="/getQuotes" element={<GetQuotes />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
