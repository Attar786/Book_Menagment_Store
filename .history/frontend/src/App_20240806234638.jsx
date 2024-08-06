import {Routes, Route} from 'react-router-dom'
import  Home  from './pages/Home'
import ShowBooks from './pages/ShowBooks'
import AddBook from './pages/AddBook'
import UpdateBook from './pages/UpdateBook'
import { EditBooks } from './pages/EditBooks'
import DeleteBook from './pages/DeleteBook'
 
const App = () => {
  return (
    <div className="bg-slate-700 p-5 flex justify-center text-zinc-100	">
     Book Store App In MERN
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='addbooks' element={<AddBook/>}/>
      <Route path='showbooks' element={<ShowBooks/>}/>
      <Route path='update' element={<UpdateBook/>}/>
      <Route path='/books/edit/:id' element={<EditBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
     </Routes>
    </div>
  )
}

export default App
