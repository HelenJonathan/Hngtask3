import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Connect from "./Pages/Connect"
import PlaceToStay from "./Pages/PlaceToStay";


const App = () => {
  return(
    <div>
      <div> <Navbar /> </div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/connect" element={ <Connect /> } />
        <Route path="/placetostay" element={ <PlaceToStay />} />
        <Route path="*" element={ <Error /> } />
      </Routes>
      <div> <Footer /> </div>
    </div>

  );

}


export default App;