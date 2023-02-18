import { forwardRef } from "react";
const Contact = forwardRef((props, ref) => {
  return (
    <div className="flex justify-center items-center sm:h-screen mt-10 sm:mt-0 mb-10 mx-4 sm:mx-6 lg:mx-8 xl:0">
      <div className="w-full max-w-6xl font-rubik-regular">
        <div className="flex justify-center">
          <h1
            ref={ref}
            className=" scroll-mt-32 font-rubik-bold text-2xl mb-20"
          >
            <span className="pr-4 text-yello">04.</span>Get In Touch
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 space-y-10">
            <p className="mb-10 text-center">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <div className="flex justify-center">
            <a
              href="mailto:beautytasara27@gmail.com"
              className="border px-5 py-4 border-yello rounded-[4px]"
            >
              Say Hello
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Contact;
