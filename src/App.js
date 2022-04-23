import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import sketch from "../public/sketched-facade.jpeg"

function App() {
  return (
    <div className="home-wrapper">
      <Header />
      <div className='rect-placeholder'>
        <img src={sketch} alt="Sketch of blue moon cafe"/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
