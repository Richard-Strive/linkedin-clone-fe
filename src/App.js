import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Profile from "./components/main_components/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Profile />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
