import { useState } from "react"
import BackButton from "../../components/BackButton"
// import { useParams } from "react-router-dom"
import axios from "axios"
import Spinner from "../../components/Spinner"
import { useNavigate, useParams } from "react-router-dom"

const DeleteBooks = () => {


  const [loaing , setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
setLoading(true);
axios.delete(`http://localhost:5000/books/${id}`).then(() => {
setLoading(false);
navigate('/');
}).catch((error) =>
  {
    setLoading(false);
    alert('an error occured, please check console logs')
console.log(error);
  })
  }


  return (
    <div className="p-4">
<BackButton/> 
   </div>
  )
}

export default DeleteBooks
