import { forwardRef, useEffect, useState } from "react";
import Details from "./Details";
import SideMenu from "./SideMenu";
const Experience = forwardRef((props, ref) => {
  const [selected, setSelected] = useState("entelect");
  const [job, setJob] = useState();
  const experience = [
    {
      company: "entelect",
      title: "Software Engineer",
      startDate: "September 2022",
      endDate: "Present",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus id sem et cursus. Mauris sit amet justo vitae tellus viverra tincidunt eu nec ex.",
        "Donec dui dolor, gravida eu lectus nec, ornare dapibus tellus. Aenean faucibus, urna id ultricies tristique, lectus turpis fringilla lectus, ",
        "Morbi mi leo, hendrerit sit amet semper vel, luctus eu ipsum. Etiam non posuere arcu. Sed luctus dapibus lorem. Maecenas luctus lacus ut",
        "Nulla ac orci nec diam venenatis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec auctor at lorem id pellentesque. ",
      ],
    },
    {
      company: "zimswitch",
      title: "Software Dev",
      startDate: "Feb 2019",
      endDate: "Jun 2022",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus id sem et cursus. Mauris sit amet justo vitae tellus viverra tincidunt eu nec ex.",
        "Donec dui dolor, gravida eu lectus nec, ornare dapibus tellus. Aenean faucibus, urna id ultricies tristique, lectus turpis fringilla lectus, ",
        "Morbi mi leo, hendrerit sit amet semper vel, luctus eu ipsum. Etiam non posuere arcu. Sed luctus dapibus lorem. Maecenas luctus lacus ut",
        "Nulla ac orci nec diam venenatis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec auctor at lorem id pellentesque. ",
      ],
    },
    {
      company: "afrosoft",
      title: "Software Dev Intern",
      startDate: "Jan 2018",
      endDate: "Jan 2019",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus id sem et cursus. Mauris sit amet justo vitae tellus viverra tincidunt eu nec ex.",
        "Donec dui dolor, gravida eu lectus nec, ornare dapibus tellus. Aenean faucibus, urna id ultricies tristique, lectus turpis fringilla lectus, ",
        "Morbi mi leo, hendrerit sit amet semper vel, luctus eu ipsum. Etiam non posuere arcu. Sed luctus dapibus lorem. Maecenas luctus lacus ut",
        "Nulla ac orci nec diam venenatis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec auctor at lorem id pellentesque. ",
      ],
    },
  ];
  useEffect(() => {
    const [exp] = experience.filter((job) => job.company === selected.toLowerCase());
    setJob(exp);
  }, [selected]);

  return (
    <div className="flex justify-center sm:h-screen mt-10 sm:mt-0 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-4xl font-rubik-regular ml-60">
        <div>
          <h1
            ref={ref}
            className=" scroll-mt-32 font-rubik-bold text-2xl mb-20"
          >
            <span className="pr-4 text-yello">02.</span>Experience
          </h1>
        </div>
        <div className="sm:flex sm:space-x-8">
          <SideMenu setSelected={setSelected} selected={selected}/>
          {job && <Details job={job} />}
          
        </div>
      </div>
    </div>
  );
});
export default Experience;
