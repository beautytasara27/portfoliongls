import { Fragment } from "react";
import Butter from "../../../assets/personal/butter.jpg";
const FeaturedThumbnail = ({ project }) => {
  return (
    <Fragment>
      <div className="hidden md:flex relative space-x-8 font-rubik-regular">
        <div className="w-8/12">
          <img className="w-full sepia hover:sepia-0" alt="butter robot" src={Butter} />
        </div>
        <div className=" w-4/12 space-y-4 flex flex-col justify-between ">
          <div className="space-y-2">
            {" "}
            <p className="text-yello">Featured Project</p>
            <h2 className="text-2xl font-rubik-bold">{project.projectName}</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <div className=" flex space-x-4 justify-end text-gray-300 text-sm">
              {project.Frameworks.map((framework) => (
                <p>{framework}</p>
              ))}
            </div>
            <div className="flex space-x-4 justify-end">
              <a className="" href={project.Github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
              <a className="" href={project.Url} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="absolute w-10/12 lg:w-5/12 right-0 top-[25%] bg-themeDarker p-8">
            <p>{project.paragraphs[0].Description}</p>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-url('../../../assets/personal/butter.jpg') font-rubik-regular">
        <div className="bg-themeDarker bg-opacity-50 w-full">
          <div className="space-y-4 flex flex-col justify-between p-2">
            <div className="space-y-2">
              {" "}
              <pre>
              <p className="text-yello">Featured Project</p></pre>
              <h2 className="text-2xl font-rubik-bold">
                {project.projectName}
              </h2>
            </div>
            <div className="">
              <p>{project.paragraphs[0].Description}</p>
            </div>
            <div className="space-y-6 text-gray-300">
              <div className="flex space-x-4 justify-start text-gray-300 text-sm">
                {project.Frameworks.map((framework) => (
                  <p>{framework}</p>
                ))}
              </div>
              <div className="flex space-x-4 justify-start">
                <a className="" href={project.Github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github "></i>
                </a>
                <a className="" href={project.Url} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FeaturedThumbnail;
