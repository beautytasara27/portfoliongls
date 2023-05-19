import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import { useRef } from "react";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useIsInViewport from "../helpers/useOnScreen";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import Animate from "../helpers/Animate";
import homeImage from "../assets/images/home.jpg";
const Home = () => {
  const landing = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);
  const ScrollToSection = (section) => {
    if (section === "landing") {
      landing.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "about") {
      about.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "services") {
      services.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "experience") {
      experience.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "contact") {
      contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "projects") {
      projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className=" text-lg">
        <Header
          ScrollToSection={ScrollToSection}
          landingIn={landingIn}
          servicesIn={servicesIn}
          aboutIn={aboutIn}
          experienceIn={experienceIn}
          contactIn={contactIn}
          projectsIn={projectsIn}
        />
        <div className="">
          <div
            className="scroll-mt-28 relative"
            style={{
              backgroundImage: `url(${homeImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              width: "100%",
              height: "100vh",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"> </div>
            <Landing ScrollToSection={ScrollToSection} ref={landing} />
          </div>
          <Animate ref={about} onScreen={aboutIn}>
            <div className="scroll-mt-28">
              <About ref={about} />
            </div>
          </Animate>
          <Animate ref={experience} onScreen={experienceIn}>
            <div className="scroll-mt-28">
              <Experience ref={experience} />
            </div>
          </Animate>
          <Animate ref={services} onScreen={servicesIn}>
            <div className="scroll-mt-28">
              <Services ref={services} />
            </div>
          </Animate>
          <Animate ref={projects} onScreen={projectsIn}>
            <div className="scroll-mt-28">
              <Projects ref={projects} />
            </div>
          </Animate>
          <Animate ref={contact} onScreen={contactIn}>
            <div className="scroll-mt-28">
              <Contact ref={contact} />
            </div>
          </Animate>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
