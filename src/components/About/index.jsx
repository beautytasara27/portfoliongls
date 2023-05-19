import AppContext from "../../context/AppContext";
import Avatar from "../../assets/images/programmer.webp";
import { forwardRef, useContext } from "react";
import AboutImage from "../../assets/images/about.jpg";
const About = forwardRef((props, ref) => {
  const { About } = useContext(AppContext);

  return (
    <div className="mb-20">
      <div className="flex justify-center  mx-4 sm:mx-6 lg:mx-8 my-20  font-rubik-regular ">
        <div className="w-full max-w-6xl ">
          <div>
            <h1
              ref={ref}
              className="scroll-mt-40 font-rubik-bold text-2xl mb-20"
            >
              <span className="lg:pr-4 text-yello">01.</span>About Us
            </h1>
          </div>
          <div className="sm:flex w-full sm:space-x-8 space-y-4 sm:space-y-0">
            <div className="p-10 bg-themeDarker text-white sm:w-1/3 space-y-4 hover:border-b border-yello group hover:scale-110 transform transition duration-300 ease-in-out">
              <div className="flex justify-center space-x-2 items-center ">
                <i className="fa-solid fa-eye group-hover:text-yello"></i>
                <h2 className="text-center text-3xl">Our Vision</h2>
              </div>
              <p className="text-center">
                Being the top body repair and panel refurbishment facility in
                Zimbabwe and beyond, commanding a position of long-term, market
                leadership supported by excellent human capital and high-caliber
                service delivery
              </p>
            </div>
            <div className="p-10 bg-themeDarker text-white sm:w-1/3 space-y-4 hover:border-b border-yello group hover:scale-110 transform transition duration-300 ease-in-out">
              <div className="flex justify-center space-x-2 items-center ">
                <i className="fa-solid fa-rocket  group-hover:text-yello"></i>
                <h2 className="text-center text-3xl">Our Mission</h2>
              </div>
              <p className="text-center">
                Our goal as a company is to offer our clients the best spray
                painting and auto body restoration services possible. We
                continuously increase the value of customers cars in Zimbabwe
                and overseas.
              </p>
            </div>
            <div className="p-10 bg-themeDarker text-white sm:w-1/3 space-y-4 hover:border-b border-yello group hover:scale-110 transform transition duration-300 ease-in-out">
              <div className="flex justify-center space-x-2 items-center ">
                <i className="fa-solid fa-scale-balanced group-hover:text-yello"></i>
                <h2 className="text-center text-3xl">Our Values</h2>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Innovation</p>
                <p>Professionalism</p>
                <p>Responsibility</p>
                <p>Accountability</p>
                <p>Teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-0 space-x-4 pr-4 sm:pr-6 lg:pr-8 py-0 bg-themeDarker ">
        <div className="w-1/2">
          <img
            className="w-full sepia hover:sepia-0"
            alt="about image"
            src={AboutImage}
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl mt-10">Richjane Panel Beaters</h2>
          <div className="flex flex-col space-y-4">
            <p className="mt-4">
              Richjane Panel Beaters. Leading registered automobile business
              Richjane Panel beaters focuses primarily on body repairs in
              Zimbabwe.
            </p>
            <p>
              The business was founded in 2018, over 5years ago. The company
              recently rebranded itself through the adoption of the first-world
              business model to suit the demands of 21st-century customers.{" "}
            </p>
            <p>
              The company recently acquired cutting-edge first-world repair
              technology, complemented by highly qualified technicians and
              support employees, in line with the new strategic corporate push,
              assuring peace of mind in quick, accurate, and high-quality.
            </p>
            <p>
              {" "}
              Our quality and service are the cornerstones of our concept. In
              order to do this, customer and vehicle care are at the center of
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
export default About;
