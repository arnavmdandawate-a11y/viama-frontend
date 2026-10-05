import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Career from './components/Careers';
import Projects from './components/Projects';
import Directors from './components/Directors';
// import Chatbot from './components/chatbot';
import Certificates from './components/Certificates';
import { Route, Routes } from 'react-router-dom'; 


class App extends Component {
  render() {
    return (
      <>  
      {/* <Chatbot /> */}
      {/* <AutoNavigate /> */}
       <Routes>
       {/* <Route path="/viama" element={<ViamaPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/certificates" element={<Certificates />} />

      </Routes>
      </>

    );
  }
}

export default App;
