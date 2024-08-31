import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { AboutUs } from './Components/AboutUs';
//import {Features} from "./Components/Features";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutUs/>
    </div>
  );
}

export default App;
