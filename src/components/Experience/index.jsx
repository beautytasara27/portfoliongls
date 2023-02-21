import { forwardRef, useEffect, useState, useContext } from "react";
import Details from "./Details";
import SideMenu from "./SideMenu";
import AppContext from "../../context/AppContext";
const Experience = forwardRef((props, ref) => {
  const { Experience } = useContext(AppContext);
  const [selected, setSelected] = useState("entelect");
  const [job, setJob] = useState();

  useEffect(() => {
    const [exp] = Experience.experience.filter((job) => job.company === selected.toLowerCase());
    setJob(exp);
  }, [selected, Experience]);

  return (
    <div className="flex justify-center lg:h-screen mx-4 sm:mx-6 lg:mx-8 mb-20">
      <div className="w-full max-w-4xl font-rubik-regular lg:ml-60">
        <div>
          <h1
            ref={ref}
            className=" scroll-mt-40 font-rubik-bold text-2xl mb-20"
          >
            <span className="pr-4 text-yello">02.</span>Experience
          </h1>
        </div>
        <div className="sm:flex sm:space-x-8 space-y-8">
          <SideMenu setSelected={setSelected} selected={selected} menuItems={Experience.menuItems}/>
          {job && <Details job={job} />}
          
        </div>
      </div>
    </div>
  );
});
export default Experience;
