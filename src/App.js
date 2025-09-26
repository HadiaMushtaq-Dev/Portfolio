
import './App.css';
import { HashRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
    <Router>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
     </Router>
    
    </div>
  );
}

export default App;
