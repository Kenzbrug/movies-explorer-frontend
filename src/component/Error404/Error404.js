import "./Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <h3 className="error404__subtitle">Страница не найдена</h3>
      <Link to="/" className="error404__button">
        Назад
      </Link>
    </div>
  );
}

export default Error404;
