import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// pages
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import PageNotFound from "../pages/PageNotFound";

 const AppRouter = () => {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default AppRouter;
