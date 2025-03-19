import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import Skills from "../components/Skills/Skills";
function Home() {
  return (
    <>
    <div className="">
      <Hero />
      <Projects />
      <About />
      <Skills/>
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
      </div>
    </>
  );
}

export default Home;
