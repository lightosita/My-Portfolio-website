import React from "react";
  

import "./index.css";
// import AppRouter from "./components/routes/AppRouter";
// import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Home from "./components/pages/home/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/pages/footer/Footer";
import AppRouter from "./components/routes/AppRouter";

function App() {
  return (
    
      <div className="App">
      <p>this is the app.js</p>
      
      <Header />
      <AppRouter/>
     
      {/* <NavBar/> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
    
  );
}
export default App;
