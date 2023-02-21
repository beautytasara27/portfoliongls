import { forwardRef, useContext } from "react";
import AppContext from "../../context/AppContext";
import Loading from "../Loader/loading";
const Landing = forwardRef(({ ScrollToSection }, ref) => {
  const { Landing } = useContext(AppContext);
  if (!Landing) {
    return <Loading />;
  }
  return (
    <div className="landing flex justify-center h-screen mx-4 sm:mx-6 lg:mx-8">
      <div className="w-full max-w-6xl">
        <div className="space-y-6 font-rubik-regular">
          <p
            ref={ref}
            className="scroll-mt-40  text-yello mt-40 font-rubik-bold"
          >
            <pre> {`Hie, my name is`}</pre>
          </p>
          <h1 className="text-4xl lg:text-7xl font-rubik-bold">
            {" "}
            {Landing.name}
          </h1>
          <h1 className="text-4xl lg:text-7xl font-rubik-bold text-gray-300">
            {" "}
            {Landing.heading}
          </h1>
          <p className="w-full md:w-2/3 lg:w-1/2 pt-4">
            {Landing.bio}{" "}
            <span className="text-yello font-rubik-bold">
              {Landing.highlighted}
            </span>
          </p>
          <h1 className=" font-rubik-bold">
            <pre>
              <span className="text-yello">PS: </span>
              My girlfriend is amazing! She built this site for me❤️🥰😊😍
            </pre>
          </h1>

          <div className="pt-4">
            {" "}
            <button className="border px-5 py-4 border-yello rounded-[4px] hover:bg-yello hover:bg-opacity-20 transition ease-in duration-500">
              <a target="_blank" rel="noreferrer" href={Landing.bottonLink}>
                {Landing.buttonText}
              </a>
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
});
export default Landing;
