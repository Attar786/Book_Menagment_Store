import { useState } from "react"
import BackButton from "../../components/BackButton"
// import { useParams } from "react-router-dom"
import axios from "axios"
import Spinner from "../../components/Spinner"
import { useNavigate, useParams } from "react-router-dom"

const DeleteBooks = () => {


  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeletebooks = () => {
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
<h1 className="text-3xl my-4 ">Delete Books</h1> 

{loading ? <Spinner/> : ""}

<div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600] p-8 mx-auto">
<h3 className="text-2xl ">Are you sure to want to delete this??</h3>

<button className="p-4 bh-red-400 text-white m-8 w-full   onClick= {handleDeletebooks}
">
  Yes Deleted
</button>
</div>
   </div>
  )
}

export default DeleteBooks
