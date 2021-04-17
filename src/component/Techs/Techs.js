import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__header">
        <p className="techs__header-title">Технологии</p>
      </div>
      <div className="techs__container">
        <h1 className="techs__title">7 технологий</h1>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <nav className="techs__steck">
          <ul className="techs__steck-links">
            <li className="techs__steck-list">
              <a
                href="http://htmlbook.ru/"
                target="blank"
                className="techs__steck-link"
              >
                HTML
              </a>
            </li>
            <li className="techs__steck-list">
              <a
                href="http://htmlbook.ru/samcss"
                target="blank"
                className="techs__steck-link"
              >
                CSS
              </a>
            </li>
            <li className="techs__steck-list">
              <a
                href="https://learn.javascript.ru/"
                target="blank"
                className="techs__steck-link"
              >
                JS
              </a>
            </li>
            <li className="techs__steck-list">
              <a
                href="https://ru.reactjs.org/"
                target="blank"
                className="techs__steck-link"
              >
                React
              </a>
            </li>
            <li className="techs__steck-list">
              <a
                href="https://githowto.com/ru"
                target="blank"
                className="techs__steck-link"
              >
                Git
              </a>
            </li>
            <li className="techs__steck-list">
              <a
                href="https://expressjs.com/ru/"
                target="blank"
                className="techs__steck-link"
              >
                Express.js
              </a>
            </li>
            <li className="techs__steck-list">
              <a
                href="https://www.mongodb.com/"
                target="blank"
                className="techs__steck-link"
              >
                mongoDB
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Techs;
