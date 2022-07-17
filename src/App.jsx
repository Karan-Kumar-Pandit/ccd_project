import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Login from "./Components/Login";
import Sigin from "./Components/Sigin";
import LiveApi from "./Components/LiveApi";
import Menu from "./Components/Menu";
import Privateroom from "./Components/Privateroom";
import Benifits from "./Components/Benifits";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <section>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/gallery" exact element={<Gallery />} />
              <Route path="/liveapi" exact element={<LiveApi />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/sigin" exact element={<Sigin />} />
              <Route path="/menu" exact element={<Menu />} />
              <Route path="/Benifits" exact element={<Benifits />} />
              <Route path="/Privateroom" exact element={<Privateroom />} />

            </Routes>
          </section>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
