import { forwardRef, useContext } from "react";
import AppContext from "../../context/AppContext";
const Contact = forwardRef((props, ref) => {
  const { Contact } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center lg:h-screen mt-10 sm:mt-0 mb-10 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl font-rubik-regular">
        <div className="flex justify-center">
          <h1
            ref={ref}
            className=" scroll-mt-40 font-rubik-bold text-2xl mb-20"
          >
            <span className="pr-4 text-yello">04.</span>Get In Touch
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2 space-y-10">
            <p className="mb-10 text-center">
              {Contact.text}
            </p>
            <div className="flex justify-center">
              <a
                href={Contact.buttonLink}
                className="border px-5 py-4 border-yello rounded-[4px] hover:bg-yello hover:bg-opacity-20 transition ease-in duration-500"
              >
                {Contact.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Contact;
