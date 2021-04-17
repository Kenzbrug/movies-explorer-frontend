import "./Footer.css";

function Footer({ location }) {
  if (location === "/signup") {
    return "";
  } else if (location === "/signin") {
    return "";
  } else if (location === "/error404") {
    return "";
  } else if (location === "/profile") {
    return "";
  } else if (location === "/editprofile") {
    return "";
  }
  return (
    <footer className="footer">
      <div className="footer__name-project">
        <p className="footer__name-project_title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__column">
        <p className="footer__column-author">&copy; 2020</p>
        <nav className="footer__column-links">
          <ul className="footer__column-lists">
            <li className="footer__column-list">
              <a
                href="https://praktikum.yandex.ru/"
                target="blank"
                className="footer__column-link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__column-list">
              <a
                href="https://github.com/Kenzbrug"
                target="blank"
                className="footer__column-link"
              >
                Github
              </a>
            </li>
            <li className="footer__column-list">
              <a
                href="https://www.facebook.com/victor.zhabolenko"
                target="blank"
                className="footer__column-link"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
