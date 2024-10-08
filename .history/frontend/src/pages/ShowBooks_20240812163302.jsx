import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from "../../components/BackButton"
import Spinner from "../../components/Spinner";


const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
setLoading(true);
axios.get(`http://localhost:5000/books/${id}`).then((response) => {
  setBook(response.data);
setLoading(false);
}
catch (error) {
  console.log(error);
  setLoading(false);
}

  },[])

  return (
    <div className="p-4">
<BackButton/>
<h1 className="text-3xl my-4">Show Book</h1>
{
  loading ? 
(
  <Spinner/>
)  : (
  <div className="flex flex-col border-2 border-sky-400"></div>
)
}
    </div>
  )
}

export default ShowBooks
