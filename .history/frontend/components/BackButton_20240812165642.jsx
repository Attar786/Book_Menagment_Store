import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex items-center">
      <Link to={destination}>
        <BsArrowLeft className="text-2xl text-sky-500 mr-2" />
      </Link>
      <button className="text-sky-500 text-3xl">
        Back
      </button>
    </div>
  );
};

export default BackButton;
