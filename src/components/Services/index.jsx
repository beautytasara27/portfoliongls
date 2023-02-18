import Web from "../../assets/images/world-wide-web.png";
import Mobile from "../../assets/images/app-development.png";
import AI from "../../assets/images/artificial-intelligence.png";
import FeaturedThumbnail from "./FeaturedThumbnail";
import { forwardRef } from "react";
const Services = forwardRef((props, ref) => {
  const project = {
    projectId: "100",
    Date: "Dec 10, 2022",
    projectName: "Library Website",
    Languages: ["Javascript"],
    Frameworks: ["OpenCv", "Tensorflow", "ROS"],
    paragraphs: [
      {
        Title: "Overview",
        Description:
          "Lorem ipsum dolor sit amet, neque quis cursus. Nullam sapien nunc, pharetra sit amet rutrum tincidunt, fermentum ac nibh. Etiam quis purus auctor, feugiat libero id, imperdiet arcu. Pellentesque pharetra sodales cursus.",
      },
    ],
    Url: "https://github.com/beautytasara27/LibraryWeb",
    GitHub: "https://github.com/beautytasara27/LibraryWeb",
    imageUrl: "Images/Altonium/alto2.png",
    video: "https://www.youtube.com/embed/RmU-EzRo6x8",
    images: [
      "Images/Altonium/alto1.png",
      "Images/Altonium/alto2.png",
      "Images/Altonium/alto3.png",
      "Images/Altonium/alto4.png",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/beautytasara27/LibraryWeb",
      },
      {
        name: "Live",
        url: "https://library-7722.netlify.app/",
      },
    ],
  };
  return (
    <div className="flex justify-center  mt-10 sm:mt-0 sm:h-screen mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl">
        <div>
          <h1
            ref={ref}
            className=" scroll-mt-32 font-rubik-bold text-2xl mb-20"
          >
            <span className="pr-4 text-yello">03.</span>Some Things I have built
          </h1>
        </div>
        <div className="space-y-8">
          <FeaturedThumbnail project={project} />
        </div>
      </div>
    </div>
  );
});
export default Services;
