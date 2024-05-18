import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Overlay from './Components/Overlay';
import Carosuel from './Components/Carosuel';
import L2R from './Components/L2R';
import About from './Components/About';
function App() {
  return (
    <>
      <Overlay></Overlay>
      <Carosuel></Carosuel>
      <L2R></L2R>
      <About></About>
    </>

  );
}

export default App;
