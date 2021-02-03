import "./styles.scss";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Services from "./components/services";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="services">
        <About />
      </div>
    </div>
  );
}

export default App;
