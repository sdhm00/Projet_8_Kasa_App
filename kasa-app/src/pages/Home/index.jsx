import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Logement from "../../components/Logement";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="About" element={<About />}></Route>
      <Route path="Logement" element={<Logement />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;