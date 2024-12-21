import PropTypes from "prop-types";

const VideoCard = ({ videoUrl, imageUrl, title, username }) => {
  return (
    <div className="max-w-sm bg-[#212121] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />

      <div className="p-4">
        <h3 className="text-lg text-[#e0aa3e] font-semibold text-center">
          {title}
        </h3>
        <p className="text-gray-400 text-center p-2">@{username}</p>

        <div className="mt-4 text-center">
          <a
            href={videoUrl}
            target="_blank"
            className="bg-[#e0aa3e] hover:bg-[#e8ba5f] px-4 py-2 rounded-md inline-block"
          >
            Watch
          </a>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default VideoCard;
