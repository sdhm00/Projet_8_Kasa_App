import img1 from "../../assets/img1.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div>
        <img src={img1} alt="img home page" />
      </div>
      <div>
        <div>
          <p>titre de la location</p>
        </div>
        <div>
          <p>titre de la location</p>
        </div>
        <div>
          <p>titre de la location</p>
        </div>
        <div>
          <p>titre de la location</p>
        </div>
        <div>
          <p>titre de la location</p>
        </div>
        <div>
          <p>titre de la location</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;