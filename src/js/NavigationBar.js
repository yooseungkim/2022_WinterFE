import React from "react";
import gearSrc from "../img/gearshape.png";
import bracketSrc from "../img/leftAngleBracket.jpeg";
import DisplayUsers from "./DisplayUsers";

function NavigationBar({ preferences, setPreferences }) {
  const [tabActive, setTabActive] = React.useState("none");

  const onClickDisplayIcon = () => {
    let newPreference = preferences;
    newPreference.displayIcon = !preferences.displayIcon;
    setPreferences(newPreference);
    localStorage.setItem("preferences", JSON.stringify(preferences));
  };
  const onClickDisplayMoney = () => {
    let newPreference = preferences;
    newPreference.displayMoney = !preferences.displayMoney;
    setPreferences(newPreference);
    localStorage.setItem("preferences", JSON.stringify(preferences));
  };
  function PreferenceTab() {
    return (
      <div style={{ display: tabActive }}>
        <span onClick={onClickDisplayIcon}>
          Display Icon: {preferences.displayIcon ? "ON" : "OFF"}
        </span>
        <br />
        <span onClick={onClickDisplayMoney}>
          Display Money: {preferences.displayMoney ? "ON" : "OFF"}
        </span>
        <br />
      </div>
    );
  }

  const onClickPreference = () => {
    setTabActive(tabActive === "block" ? "none" : "block");
  };
  return (
    <div className="bar">
      <img className="barIcon" src={gearSrc} onClick={onClickPreference} />
      <PreferenceTab />
      <br />
      <img className="barIcon" src={bracketSrc} />
      <br />
      <img className="barIconReversed" src={bracketSrc} />
    </div>
  );
}

export default NavigationBar;
