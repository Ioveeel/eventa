import Blog from "components/Blog";
import Footer from "components/Footer";
import Home from "components/Home";
import Portfolio from "components/Portfolio";

import ScrollToTop from "components/ScrollToTop";

import Testimonials from "components/Testimonials";

import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BothSides from "BothSides";
import Places from "components/Places";

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<BothSides/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/places' element={<Places/>} />
  </Routes>
  </BrowserRouter>
    // <motion.div initial="hidden" animate="show">
    //   <ScrollToTop />
    //   <Home />
      
    //   <Portfolio />
      
    //   <Blog />
      
      
    //   <Testimonials />
      
    //   <Footer />
    // </motion.div>
  );
}
