import { useState } from "react"
import BackButton from "../../components/BackButton"
import Spinner from "../../components/Spinner"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const CreateBooks = () => {

const [title , setTitle] = useState('');
const [author, setAuthor] = useState('');
const [publishYear, setPublishYear] = useState('');
const [loading, setLoading] = useState('');
const navigate =  useNavigate();

const handleSaveBook = () =>
  {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.post('http://localhost:5000/books', data).then(()=>
    {
      setLoading(false);
      navigate('/');
    }).catch((error) =>{
      setLoading(false);
      alert('An error occurred while')
      console.log(error);

    })
  }
  return (
    <div className='p-4'>
      <h1 className='my-4 text-3xl'>Create Books</h1>
      {
        loading ? <Spinner/> : " "
      }
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl border-gray-500 px-4 py-2">
        Title    
          </label>
        </div>
      </div>
    </div>
  )
}

export default CreateBooks
