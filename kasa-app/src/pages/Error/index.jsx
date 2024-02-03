import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Error() {
  return (
    <div>
      <Header />
      <div>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <p>Retourner sur la page d’accueil</p>
      </div>
      <Footer />
    </div>
  );
}

export default Error;