import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <Link to={destination} className="flex items-center">
      <button className="flex items-center bg-sky-700 text-white text-lg px-4 py-2 rounded hover:bg-sky-700 transition duration-200">
        <BsArrowLeft className="text-2xl mr-2" />
        Back
      </button>
    </Link>
  );
};

export default BackButton;
