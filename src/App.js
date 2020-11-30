import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Profile from "./components/main_components/Profile";
import SideComps from "./components/sideComponents/SideComps";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <SideComps />
      <Footer />
    </div>
  );
}

export default App;
