import "../styles/Pages/Error/index.css"
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="error-page">
        <h1 className="error-title">404</h1>
        <h2 className="error-text">Oups! La page que vous demandez n'existe pas.</h2>
        <p className="error-p">Retourner sur la page d’accueil</p>
      </div>
    </div>
  );
}