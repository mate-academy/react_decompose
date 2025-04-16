// import a css file containig welcome styles
// eslint-disable-next-line import/no-unresolved
import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
  );
}

export default Welcome;
