import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home";
import "./styles.scss";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
