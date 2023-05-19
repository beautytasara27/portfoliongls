import { forwardRef, useContext } from "react";
import ProjectThumbnail from "../ProjectThumbnail";
import AppContext from "../../context/AppContext";
const Projects = forwardRef((props, ref) => {
  const { Projects } = useContext(AppContext);
  return (
    <div className="flex justify-center mx-4 sm:mx-6 lg:mx-8 mb-20">
      <div className="w-full max-w-6xl">
        <div className="flex justify-center">
          <h1
            ref={ref}
            className=" scroll-mt-40 font-rubik-bold text-2xl mb-20"
          >
            Other Noteworthy Projects
          </h1>
        </div>
        {Projects && (
          <div className="sm:grid grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            {Projects.map((project) => (
              <div className="" key={project.name}>
                <ProjectThumbnail project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default Projects;
