
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Work from './components/pages/Work/Work';
import Contact from './components/pages/Contact';
import NavBar from './components/navbar/NavBar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
