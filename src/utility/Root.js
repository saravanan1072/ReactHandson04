import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../compo/Home'
import Student from "../compo/Student";
import Contact from '../compo/Contact';
import Form from "../compo/Form";

function Root(){
  return(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/student" element={<Student/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/student/form" element={<Form/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}
export default Root;
