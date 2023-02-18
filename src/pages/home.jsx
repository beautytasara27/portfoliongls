import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import { Fragment, useRef } from "react";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Rea from "../../src/assets/images/react.png";
import Node from "../../src/assets/images/node.png";
import Visual from "../../src/assets/images/java.png";
import npm from "../../src/assets/images/npm.png";
import useIsInViewport from "../helpers/useOnScreen";
import Projects from "../components/Projects";
const Home = () => {
  const landing = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);
  const ScrollToSection = (section) => {
    if (section === "landing") {
      landing.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    } else if (section === "about") {
      about.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }  else if (section === "services") {
      services.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    } else if (section === "experience") {
      experience.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    } else if (section === "contact") {
      contact.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    } else if (section === "projects") {
      projects.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  };
  const landingIn = useIsInViewport(landing);
  const servicesIn = useIsInViewport(services);
  const aboutIn = useIsInViewport(about);
  const experienceIn = useIsInViewport(experience);
  const contactIn = useIsInViewport(contact);
  const projectsIn = useIsInViewport(projects);
  return (
    <div className="relative">
      <div className=" ">
        <Header
          ScrollToSection={ScrollToSection}
          landingIn={landingIn}
          servicesIn={servicesIn}
          aboutIn={aboutIn}
          experienceIn={experienceIn}
          contactIn={contactIn}
          projectsIn={projectsIn}
        />
        <div className="scroll-mt-28">
          <Landing ScrollToSection={ScrollToSection} ref={landing} />
        </div>
        <div className="scroll-mt-28">
          <About ref={about} />
        </div>
         <div className="scroll-mt-28">
          <Experience ref={experience} />
        </div>
        <div className="scroll-mt-28">
          <Services ref={services} />
        </div>
       
        <div className="scroll-mt-28">
          <Projects ref={projects} />
        </div>
        <div className="scroll-mt-28">
          <Contact ref={contact} />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;