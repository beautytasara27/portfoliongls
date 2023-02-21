import AppContext from "../../context/AppContext";
import Avatar from "../../assets/images/programmer.webp";
import { forwardRef, useContext } from "react";
const About = forwardRef((props, ref) => {
  const { About } = useContext(AppContext);

  return (
    <div className="flex justify-center lg:h-screen mx-4 sm:mx-6 lg:mx-8 my-20  font-rubik-regular">
      <div className="w-full max-w-6xl lg:ml-40">
        <div>
          <h1 ref={ref} className="scroll-mt-40 font-rubik-bold text-2xl mb-20">
            <span className="lg:pr-4 text-yello">01.</span>About Me
          </h1>
        </div>
        <div className="flex space-x-10">
          <div className="space-y-4  w-full lg:w-1/2">
            {About.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{About.skillsHeading}</p>
            <div className="grid grid-cols-2 space-y-2">
              {About.skills.map((skill) => (
                <div key={skill} className="flex items-center  space-x-2">
                  <i className="fa-solid fa-play fa-xs text-yello"></i>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="group hidden md:block  sm:w-[300px] w-[100px] h-[100px] sm:h-[245px] border-white border-2">
            <div className="-translate-x-4 -translate-y-4 sepia group-hover:sepia-0 group-hover:-translate-x-2 group-hover:-translate-y-2 bg-white">
              <img
                className="z-0 w-full sepia group-hover:sepia-0 rounded-[3px] "
                src={Avatar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default About;
