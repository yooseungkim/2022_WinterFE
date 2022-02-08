import React from "react";
import gearSrc from "../img/gearshape.png";
import bracketSrc from "../img/leftAngleBracket.jpeg";

function NavigationBar() {
  return (
    <div className="bar">
      <img className="barIcon" src={gearSrc} />
      <br />
      <img className="barIcon" src={bracketSrc} />
      <br />
      <img className="barIconReversed" src={bracketSrc} />
    </div>
  );
}

export default NavigationBar;
