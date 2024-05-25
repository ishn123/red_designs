import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Landscape from './pages/Landscape';
import Automation from './pages/Automation';
import InteriorDesign from './pages/InteriorDesign';
import InteriorContract from './pages/InteriorContract';
import Architecture from './pages/Architecture';
import StructureDesign from './pages/StructureDesign';
import CustomContactForm from './Components/CustomContactForm';
function App() {
  return (
    <>
      <CustomContactForm></CustomContactForm>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/landscape' element={<Landscape></Landscape>}></Route>
        <Route path='/automation' element={<Automation></Automation>}></Route>
        <Route path='/interiordesign' element={<InteriorDesign></InteriorDesign>}></Route>
        <Route path='/interiorcontract' element={<InteriorContract></InteriorContract>}></Route>
        <Route path='/architecture' element={<Architecture></Architecture>}></Route>
        <Route path='/structuredesign' element={<StructureDesign></StructureDesign>}></Route>
      </Routes>

    </>
  );
}

export default App;
