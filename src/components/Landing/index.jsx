import { forwardRef} from "react";
const Landing = forwardRef(({ScrollToSection}, ref) => {
  return (
    <div ref={ref} className="flex justify-center sm:h-screen mb-10 mx-4 sm:mx-6 lg:mx-8 xl:0">
    <div className="w-full max-w-6xl">
      <div className="space-y-6 font-rubik-regular">
        <p
          ref={ref}
          className="scroll-mt-32  text-yello mt-40 "
        >
          Hie, my name is
        </p>
        <h1 className="text-7xl font-rubik-bold"> Angels Makuwerere</h1>
        <h1 className="text-7xl font-rubik-bold"> I build robots and other stuff.</h1>
        <p className="w-full sm:w-1/2 pt-4">
          I’m an A.I researcher specializing in building and designing
          exceptional social robots. Currently, I’m focused on building
          accessible, human-centered products at{" "}
          <span className="text-yello">XScript.</span>
        </p>
        <div className="pt-4"> <button className="border px-5 py-4 border-yello rounded-[4px]">Download my Resume</button></div>
       
      </div>

      <div></div>
    </div>
  </div>
  );
});
export default Landing;
