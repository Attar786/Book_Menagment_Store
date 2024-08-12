import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex items-center">
      <Link to={destination}>
        <BsArrowLeft className="text-2xl text-gray-400 mr-2" />
      </Link>
      <button className="btn btn-blue">
  Button
</button>    </div>
  );
};

export default BackButton;
