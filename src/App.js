import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import sketch from "./assets/sketched-facade.jpeg"
import logo from "./assets/logo.png"

function App() {
  return (
    <>
    <div className='intro-scene'>
      <img src={logo} alt='blue moon cafe logo' />
    </div>
    <div className="home-wrapper">
      <Header />
        <img className='hero-img' src={sketch} alt="Sketch of blue moon cafe"/>
    </div>
      <Footer />
    </>
  );
};

export default App;
