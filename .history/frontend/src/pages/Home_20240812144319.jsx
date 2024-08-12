
import { useState , useEffect } from "react"
import axios from "axios"
import Spinner from "../../components/Spinner"
import { Link } from "react-router-dom"
import {AiOutlineEdit} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"




const Home = () => {
const [books, setBooks] = useState([]);
const [loading , setloading] = useState([false]); 
// useEffect(() => {
//   setloading(true);
//   axios.get('http://localhost:5000/books')
//   .then(
//     (res=> setBooks(res.data.data));
//  setloading(false);
// })
useEffect(() => { setloading(true);
  axios.get('http://localhost:5000/books').then((res) => {
    setBooks(res.data.data);
    setloading(false);
  }
  .catch((error) => {
    console.log(error);
    setloading(false);
  })
},[]);

  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl"/>
          </Link>
          {loading ? (
            <Spinner />
          ) : (
            <table className="w-full border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="border border-slate-600 rounded-md">No</th>
                  <th className="border border-slate-600 rounded-md">Title</th>
                </tr>
              </thead>
              <tbody>

              </tbody>

            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
