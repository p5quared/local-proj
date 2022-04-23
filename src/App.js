import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import sketch from "./assets/sketched-facade.jpeg"

function App() {
  return (
    <>
    <div className="home-wrapper">
      <Header />
        <img className='hero-img' src={sketch} alt="Sketch of blue moon cafe"/>
    </div>
      <Footer />
    </>
  );
};

export default App;
