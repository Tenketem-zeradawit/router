

import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home1 from "./Home1.jsx";
import Feature1 from "./Feature1.jsx";
import Enterprise from "./Enterprise.jsx";
import Support1 from "./Support1.jsx";
import Footer from './Footer.jsx';
import './style.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/Feature1" element={<Feature1 />} />
          <Route path="/Enterprise" element={<Enterprise />} />
          <Route path="/Support1" element={<Support1/>} />
          
                          </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;