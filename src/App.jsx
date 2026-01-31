import React, { useRef } from "react";
import Form from "./ContactForm";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Content from "../Content";
import Footer from "../Footer";
function App() {
  const contactUs=useRef(null);
  const aboutUs=useRef(null);
  const products=useRef(null);
  function scrollTo(ref){
    ref.current.scrollIntoView({
      behavior: "smooth"
    });
  }
  return (
    <div className="bg-background text-text flex flex-col min-h-screen">
    <Navbar scrollToContact={()=>scrollTo(contactUs)} scrollToAbout={()=>scrollTo(aboutUs)} scrollToProducts={()=>scrollTo(products)} />
    <Content contactref={contactUs} aboutref={aboutUs} productref={products} />
    <Footer />
    </div>
    

  )
}

export default App;
