// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Auth from './pages/Auth';
import AddCat from './components/TableCat/CatFuncs/AddCat';
import DeleteCat from './components/TableCat/CatFuncs/DeleteCat';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/adminauth' element={<Auth/>}/>
        <Route path='/admin/addcatagory' element={<AddCat/>}/>
        <Route path='/admin/deletecatagory' element={<DeleteCat/>}/>
      </Routes>
    </BrowserRouter>
 </div>
  )
}

export default App
