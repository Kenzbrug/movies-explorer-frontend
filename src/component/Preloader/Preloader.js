import React from "react";
import "./Preloader.css";

const Preloader = ({ isShow }) => {
  return (
    <section className={isShow ? "preloader preloader__show" : "preloader"}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </section>
  );
};

export default Preloader;
