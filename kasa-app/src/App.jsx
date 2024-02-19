import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logement from "./pages/Logements/Logement";
import ErrorPage from "./pages/Error/Error";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="About" element={<About />}></Route>
      <Route path="Logement" element={<Logement />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;