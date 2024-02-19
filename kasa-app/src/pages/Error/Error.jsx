import "../../styles/styles.css"
import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div id="error-page">
      <div className="error-page">
        <h1 className="error-title">404</h1>
        <h2 className="error-text">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="error-p">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
}

export default ErrorPage;