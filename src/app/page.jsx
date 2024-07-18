import Blog from "./(dynamic)/blog/page";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar/Navbar1";
import Services from "./components/Services/Services";
import Slider from "./components/Slider/Slider";
import Partners from "./components/partners/Partners";

export default function Home() {
  return (
    <div>
      <Navbar1 />
      <Navbar />
      <Slider />
      <Blog />
      <About />
      <Services />
      <Partners />
      <Contactus />
      <Footer />
      <Footer2 />
    </div>
  );
}
