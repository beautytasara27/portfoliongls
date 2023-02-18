import Avatar from "../../assets/images/programmer.webp";
import { forwardRef } from "react";
const About = forwardRef((props, ref) => {
  const width = 2;
  const skills = [
    "OpenCV",
    "Tensorflow",
    "C",
    "SLAM",
    "ROS TF",
    "YARP",
    "ROCK",
    "Python",
  ];
  return (
    <div className="flex justify-center sm:h-screen mx-4 sm:mx-6 lg:mx-8 xl:0 font-rubik-regular">
      <div className="w-full max-w-6xl ml-40">
        <div>
          <h1
            ref={ref}
            className=" scroll-mt-32 font-rubik-bold text-2xl mb-20"
          >
            <span className="pr-4 text-yello">01.</span>About Me
          </h1>
        </div>
        <div className="flex space-x-10">
          <div className="space-y-4  w-1/2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              mollis augue eget mauris rutrum, vel imperdiet magna cursus.
              Aliquam ac fermentum turpis. Duis sit amet consectetur mauris. Nam
              quis magna velit. Nunc tincidunt convallis finibus. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Sed elementum purus augue, sit amet scelerisque
              augue dignissim sit amet. Fusce eu orci tortor.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisciamet scelerisque
              augue dignissim sit amet. Fusce eu orci tortor.
            </p>{" "}
            <p>
             Aliquam ac fermentum turpis. Duis sit amet consectetur mauris. Nam quis magna velit. Nunc tincidunt convallis finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum purus augue, sit amet scelerisque augue dignissim sit amet. Fusce eu orci tortor. 
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className="grid grid-cols-2 space-y-2">
              {skills.map((skill) => (
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
