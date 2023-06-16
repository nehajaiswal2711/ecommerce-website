
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/home';
import About from './Components/About/about';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
