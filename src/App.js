import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Notice from './pages/notice/Notice';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/notice" element={<Notice />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
