import FeaturedThumbnail from "./FeaturedThumbnail";
import { forwardRef, useContext } from "react";
import AppContext from "../../context/AppContext";
const Services = forwardRef((props, ref) => {
  const { Featured } = useContext(AppContext);

  return (
    <div className="flex justify-center lg:h-screen mx-4 sm:mx-6 lg:mx-8 mb-20">
      <div className="w-full max-w-6xl">
        <div>
          <h1
            ref={ref}
            className=" scroll-mt-40 font-rubik-bold text-2xl mb-20"
          >
            <span className="pr-4 text-yello">03.</span>Some Things I have built
          </h1>
        </div>
        <div className="space-y-8">
          {Featured.map((project) => (
            <FeaturedThumbnail project={project} />
          ))}
        </div>
      </div>
    </div>
  );
});
export default Services;
