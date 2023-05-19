import Chasis from "../../assets/images/services/chassis.png";
const ProjectThumbnail = ({ project }) => {
  return (
    <div className="p-8 h-full bg-white font-rubik-regular space-y-4 text-black">
      <div className="flex justify-center items-center ">
        <img className="h-[60px] w-[60px]" src={Chasis} alt="hey hey" />
      </div>
      <h3 className="font-rubik-bold text-center">{project.name}</h3>
      <p className="">{project.description}</p>
    </div>
  );
};
export default ProjectThumbnail;
