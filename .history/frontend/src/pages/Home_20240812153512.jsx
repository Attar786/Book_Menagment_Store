import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        console.log("API Response:", response.data.data);  // Log the response data
        setBooks(response.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setloading(false);
      });
  }, []);

  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md max-md-hidden">Author</th>
                <th className="border border-slate-600 rounded-md max-md-hidden">Publish Year</th>
                <th className="border border-slate-600 rounded-md">Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book, index) => (
                  <tr key={book._id}>
                    <td className="border border-slate-600 rounded-md text-center">{index + 1}</td>
                    <td className="border border-slate-600 rounded-md">{book.title}</td>
                    <td className="border border-slate-600 rounded-md max-md-hidden">{book.author}</td>
                    <td className="border border-slate-600 rounded-md max-md-hidden">{book.publishYear}</td>
                    <td className="border border-slate-600 rounded-md flex justify-center items-center">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-sky-800 text-2xl" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-yellow-600 text-2xl" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-red-700 text-2xl" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No books available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
