import { Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import LeftNavbar from "./components/LeftNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { DotsPng, Rectangle, StyleDefaultPng, StyleDefaultSvg } from "./assets/images";
const App = () => {
  return (
    <div className="flex bg-[#1f232a] min-h-screen">

      {/* Left Sidebar */}
      <LeftNavbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center">
        
        <div className="w-full max-w-[1024px]">
          <TopNavbar />
          
          {/* 🔥 PAGE SWITCHING HAPPENS HERE */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>

          <Footer/>

        </div>

      </div>

    </div>
  );
};

export default App;
