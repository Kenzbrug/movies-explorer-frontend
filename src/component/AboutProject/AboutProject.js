import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutproject" id="aboutproject">
      <div className="aboutproject__header">
        <h1 className="aboutproject__header-title">О проекте</h1>
      </div>
      <div className="aboutproject__context">
        <div className="aboutproject__two-column">
          <h2 className="aboutproject__title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="aboutproject__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutproject__two-column">
          <h2 className="aboutproject__title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="aboutproject__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutproject__part">
        <div className="aboutproject__container-week">
          <div className="aboutproject__interval">
            <p className="aboutproject__one-week">1 неделя</p>
            <div className="aboutproject__rectangle"></div>
          </div>
          <p className="aboutproject__tech-programming">Back-end</p>
        </div>

        <div className="aboutproject__container-week">
          <div className="aboutproject__interval">
            <p className="aboutproject__four-weeks">4 недели</p>
            <div className="aboutproject__rectangle"></div>
          </div>
          <p className="aboutproject__tech-programming">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
