import { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false); 
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`).then((response) => {
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('An error occurred while fetching the book');
      console.log(error);
    });
  }, [id]);  // Added `id` as a dependency

  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.put(`http://localhost:5000/books/${id}`, data)  // Changed `post` to `put`
      .then(() => {
        setLoading(false);
        navigate('/');
      }).catch((error) => {
        setLoading(false);
        alert('An error occurred while saving the book');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl'>Edit Books</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl border-gray-500 px-4 py-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-gray-500 border-2 px-4 py-2 w-full" />
        </div>

        <div className="my-4">
          <label className="text-xl border-gray-500 px-4 py-2" htmlFor="author">
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-gray-500 border-2 px-4 py-2 w-full" />
        </div>

        <div className="my-4">
          <label className="text-xl border-gray-500 px-4 py-2" htmlFor="publishYear">
            Publish Year
          </label>
          <input
            id="publishYear"
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-gray-500 border-2 px-4 py-2 w-full" />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}> Save</button>
      </div>
    </div>
  );
};

export default EditBooks;
