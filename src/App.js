import "./styles.scss";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="page" id="about">
        <About />
      </div>
      <div className="page" id="services">
        <Services />
      </div>

      <div className="page" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
