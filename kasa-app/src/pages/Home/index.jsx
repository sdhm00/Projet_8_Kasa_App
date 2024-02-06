import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="About" element={<About />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;