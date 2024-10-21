import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AiSoftwareBrains from './pages/AiSoftwareBrains'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import GenerativeAI from "./pages/GenerativeAi";
import Book from "./pages/Book";
import About from "./pages/About";
import FullStackWebDevelopment from "./pages/FullStackWebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import WebAndMetawerse from "./pages/WebAndMetawerse";
import UIUXDesign from "./pages/UIUXDesign";
import SaasApplication from "./pages/SaasApplication";
import WordpressPluginDevelopment from "./pages/WordpressPluginDevelopment";
import AIMarketingLandingPage from "./components/AiSoftwareBrains/AIMarketingLandingPage";
import AIBrainLandingPage from "./components/AiSoftwareBrains/AIBrainLandingPage";
import CmsDevelopment from './pages/CmsDevelopment';
import Blockchain from "./pages/Blockchain";

// import GenerativeAI from "./pages/GenerativeAI";
// import WebDevelopment from "./pages/WebDevelopment";
// import MobileAppDevelopment from "./pages/MobileAppDevelopment";
// import GetQuotes from "./pages/GetQuotes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AiSoftwareBrains" element={<AiSoftwareBrains />} />
        <Route path="/getQuotes" element={<Book />} />
        <Route path="/generativeai" element={<GenerativeAI />} />
        <Route path = "/AiBrainLandingPage" element = {<AIBrainLandingPage/>}/>
        <Route path='/AiMarketingLandingPage'  element = {<AIMarketingLandingPage/>}/>
        <Route
          path="/fullstackdevelopment"
          element={<FullStackWebDevelopment />}
        />
        <Route path="/digitaldevelopment" element={<DigitalMarketing />} />
        <Route
          path="/mobileappdevelopment"
          element={<MobileAppDevelopment />}
        />
        <Route path="/webandmetaverse" element={<WebAndMetawerse />} />
        <Route path="/uiuxdesign" element={<UIUXDesign />} />
        <Route path="/saasapplication" element={<SaasApplication />} />
        <Route
          path="/wordpressplugindevelopment"
          element={<WordpressPluginDevelopment />}
        />
        <Route
          path="/blockchain"
          element={<Blockchain />}
        />
        <Route
          path="/cmsdevelopment"
          element={<CmsDevelopment />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
