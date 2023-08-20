import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Miscellaneous from "../components/Miscellaneous";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${name} | Portfolio`;
    },
    [name]
  );

  return (
    <>
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Miscellaneous />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
