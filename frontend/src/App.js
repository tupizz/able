import "./App.css";
import Routes from "./routes";
import Navbar from "./components/Navbar.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
