import Navbar from "./components/Navbar/Navbar";
import SecondNavbar from "./components/SecondNavbar/SecondNavbar";
import Intro from "./components/Intro/Intro";
import './App.css'

function App() {
 
  return (
    <div className="App">
    <Navbar/>
    <SecondNavbar/>
    <Intro/>
    </div>
  );
}

export default App;
