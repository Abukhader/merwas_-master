import React from "react";
import Navbar1 from "./components/Navbar/Navbar1";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Blog from "./(dynamic)/blog/page"; // استدعاء مكون Blog
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Partners from "./components/partners/Partners";
import Contactus from "./components/Contactus/Contactus";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import NoSsr from "@mui/material/NoSsr"; // استدعاء NoSsr

const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar />
      <Slider />
      <NoSsr>
        <Blog />
      </NoSsr>
      <About />
      <Services />
      <Partners />
      <Contactus />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Home;
