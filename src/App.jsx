import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {

    const reveals = document.querySelectorAll(".reveal");

    const handleScroll = () => {

      reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

  }, []);

  return (
    <>

      <Navbar />

      <div className="reveal">
        <Hero />
      </div>

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Education />
      </div>

      <div className="reveal">
        <Skills />
      </div>

      <div className="reveal">
        <Experience />
      </div>

      <div className="reveal">
        <Projects />
      </div>

      <div className="reveal">
        <Activities />
      </div>

      <div className="reveal">
        <Contact />
      </div>

      <Footer />

    </>
  );
}

export default App;