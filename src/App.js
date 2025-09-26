
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
