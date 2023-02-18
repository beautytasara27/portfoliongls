const Details = ({ job }) => {
  return (
    <div className="font-rubik-regular">
      <div className="space-y-4">
        <h3 className="font-rubik-bold">{job.title}</h3>
        <p className="text-base text-gray-300">{`${job.startDate} - ${job.endDate}`}</p>
        <div className="text-gray-300">
          {job.descriptions.map((point) => (
            <div key={point} className="flex items-center space-x-4">
              <i className="fa-solid fa-play fa-xs text-yello"></i>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Details;
