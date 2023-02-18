import Avatar from "../../assets/images/avatar.jpg";
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
    <div className="flex justify-center sm:h-screen mx-4 sm:mx-6 lg:mx-8 xl:0">
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
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>{" "}
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
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
          <div className="group hidden md:block  sm:w-[300px] w-[100px] h-[100px] sm:h-[300px] border-white border-2">
            <div className="-translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2 ">
              <img
                className="z-1 w-full sepia group-hover:sepia-0 rounded-[3px] group-hover:group-hover:-translate-x-4 group-hover:-translate-y-4"
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
