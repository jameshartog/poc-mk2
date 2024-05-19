import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Space from "./routes/Space";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/space" element={<Space/>}/>
      </Routes>
    </>
  );
}

export default App;
