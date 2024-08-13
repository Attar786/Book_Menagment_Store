import {Routes, Route} from 'react-router-dom'
import  Home  from './pages/Home'
// import ShowBooks from './pages/ShowBooks'
// import AddBook from './pages/AddBook'
// import UpdateBook from './pages/UpdateBook'
// import EditBooks  from './pages/EditBooks'
// import DeleteBook from './pages/DeleteBook'
import CreateBooks from './pages/CreateBooks'
 
const App = () => {
  return (
    <>
    <div className="bg-slate-700 p-5 flex justify-center text-zinc-100	">
     Book Store App In MERN
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      {/* <Route path='/books/details/:id' element={<ShowBooks/>}/> */}
      {/* <Route path='/books/edit/:id' element={<EditBooks/>}/> */}
      {/* <Route path='/books/delete/:id' element={<DeleteBook/>}/> */}
     </Routes>
    </div>
    </>
  )
}

export default App