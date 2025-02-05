import React from "react";
import Navbar from "./Components/Navbar";  
import Home from "./Pages/Home";          
import Footer from "./Components/Footer"; 

const App = () => {
  return (
    <div className="font-sans bg-black text-white">
      
      <Navbar />
      
     
      <Home />
      
     
      <Footer />
    </div>
  );
};

export default App;
