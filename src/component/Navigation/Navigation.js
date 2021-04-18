import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation({
  location,
  clickMenu,
  handleClickMenu,
  handleCloseClickMenu,
  loggedIn,
}) {
  if (location === "/signin") {
    return "";
  } else if (location === "/signup") {
    return "";
  } else if (location === "/error404") {
    return "";
  }

  return (
    <nav className={`navigation ${clickMenu ? "navigation__active" : ""}`}>
      {loggedIn ?
        (<div
          className={`navigation__menu 
            ${location === "/"
              ? "navigation__menu-item-close_hidden navigation__menu_hidden"
              : "navigation__menu_active "
            } 
             ${clickMenu ? "navigation__menu-item-close" : ""}`}
          onClick={handleClickMenu}
        ></div>) : (<></>)}
      {!loggedIn === true ? (
        <div className="navigation__container">
          <Link className="navigation__signup-button" to="/signup">
            Регистрация
          </Link>
          <Link className="navigation__signin-button" to="/signin">
            Войти
          </Link>
        </div>
      ) : location === "/signin" ? (
        ""
      ) : location === "/signup" ? (
        ""
      ) : (
        <div
          className={`navigation__links ${clickMenu ? "navigation__links_active" : ""
            }`}
        >
          <ul className="navigation__lists">
            <li className="navigation__list">
              {clickMenu ? (
                <div className="navigation__list">
                  <NavLink
                    activeClassName="navigation__page-is-active"
                    onClick={handleCloseClickMenu}
                    className={`navigation__home-page-button `}
                    exact
                    to="/"
                  >
                    Главная
                  </NavLink>
                </div>
              ) : (
                ""
              )}
              <NavLink
                activeClassName="navigation__page-is-active"
                onClick={handleCloseClickMenu}
                className="navigation__films-button"
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__list">
              <NavLink
                activeClassName="navigation__page-is-active"
                onClick={handleCloseClickMenu}
                className="navigation__savefilms-button"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <ul className="navigation__lists">
            <li className="navigation__list">
              <NavLink
                activeClassName="navigation__page-is-active"
                onClick={handleCloseClickMenu}
                className="navigation__account-button"
                to="/profile"
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
