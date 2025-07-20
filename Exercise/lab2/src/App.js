import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PizzaMenu from "./components/PizzaMenu";
import BookingForm from "./components/BookingForm";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "currentColor" }}>
      <Navbar />
      <HeroSection />
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{color: "white"}}>Our Menu</h2>
        <PizzaMenu />
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{color: "white"}}>Book Your Table</h2>
        <BookingForm />
      </div>
    </div>
  );
}

export default App;
