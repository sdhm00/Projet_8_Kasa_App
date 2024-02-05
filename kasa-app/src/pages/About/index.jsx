import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img2 from "../../assets/img2.png"
import "../../styles/Pages/About/index.css"

function About() {
  return (
    <div>
      <Header />
      <div>
        <img src={img2} alt="img page à propos" />
      </div>
      <div>
        <button>Flabilité</button>
        <button>Respect</button>
        <button>Service</button>
        <button>Sécurité</button>
      </div>
      <Footer />
    </div>
  );
}

export default About;