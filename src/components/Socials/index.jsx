const Socials = () => {
  return (
    <div className="flex flex-col space-y-4 justify-start items-center fixed bottom-0 pb-0 ml-8">
      <a className="hover:text-yello" href="" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-github"></i>
      </a>
      <a className="hover:text-yello" href="" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      <a className="hover:text-yello" href="" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a className="hover:text-yello" href="" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <div className="h-[100px] w-[2px] bg-gray-300 "></div>
    </div>
  );
};
export default Socials;
