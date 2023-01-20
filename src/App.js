import './App.css';
import Navbar from "./KFC/Navbar";
import Carusel from "./KFC/Carusel";
import Menu from "./KFC/Menu.jsx";
import Rasm from "./KFC/Rasm.jsx";
import Tarkibi from "./KFC/Tarkibi.jsx";
import Vizi from "./KFC/Vizi.jsx";
import Yow from "./KFC/hede.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carusel/>
      <Menu/>
      <Rasm/>
      <Tarkibi/>
      <Vizi/>
      <Yow/>
    </div>
  );
}

export default App;
