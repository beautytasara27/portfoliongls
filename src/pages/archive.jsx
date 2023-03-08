import { useContext } from "react";
import AppContext from "../context/AppContext";
const Archive = () => {
  const { Archive } = useContext(AppContext);
  return (
    <div className="text-base lg:text-lg mt-40 font-rubik-regular">
      <div className="flex justify-center h-screen mx-4 sm:mx-6 lg:mx-8">
        <div className="w-full max-w-6xl">
          <div>
            <h1 className="font-rubik-bold text-4xl lg:text-7xl mb-10 text-gray-200">
              Archive
            </h1>
            <pre>
              <p className="text-yello text-sm sm:text-lg">
                A bunch of stuff I've built over the years.
              </p>
            </pre>
          </div>
          <table className="table-auto w-full mt-20">
            <thead>
              <tr className="text-gray-300 font-rubik-bold">
                <th scope="col" className="px-6 py-3">
                  Year
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3">
                  Made at
                </th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3">
                  Built With
                </th>
                <th scope="col" className="px-6 py-3">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {Archive.map((project) => (
                <tr
                  key={project.projectId}
                  className="space-y-0 hover:bg-themeDarker"
                >
                  <td className="px-6 py-4 text-yello">{project.Date}</td>
                  <td className="px-6 py-4 font-rubik-bold lg:text-xl text-gray-200">
                    {project.projectName}
                  </td>
                  <td className="hidden lg:table-cell px-6 py-4 text-gray-300">{project.Company}</td>
                  <td className="hidden lg:table-cell px-6 py-4 text-gray-300 text-xs lg:text-sm">
                    <pre>
                    •{project.Frameworks.map((lang) => (
                    <span className="mx-2">{`${lang} •`}</span>
                      ))}
                    </pre>
                  </td>
                  <td className="px-6 py-4 text-gray-300 flex space-x-4  items-center">
                  <a
                  className="flex items-center"
                  href={project.Github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github "></i>
                </a>
                <a
                  className="flex items-center"
                  href={project.Url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square "></i>
                </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Archive;
