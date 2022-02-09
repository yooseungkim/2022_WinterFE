import React from "react";
import "./App.css";
import DisplayUsers from "./js/DisplayUsers";
import NavigationBar from "./js/NavigationBar";

function App() {
  let initialPreferences = {
    displayIcon: true,
    displayMoney: true,
  };
  let [preferences, setPreferences] = React.useState(initialPreferences);

  localStorage.getItem("preferences") === null
    ? localStorage.setItem("preferences", JSON.stringify(initialPreferences))
    : (preferences = JSON.parse(localStorage.getItem("preferences")));

  const [users, setUsers] = React.useState([
    {
      id: 1,
      name: "yooseung",
      type: "Manager",
      account: 111111,
      spent: 200000,
      events: ["a"],
    },
    {
      id: 2,
      name: "sungjun",
      type: "Depositors",
      account: 111112,
      spent: -100000,
      events: ["b"],
    },
    {
      id: 3,
      name: "jangwon",
      type: "Depositors",
      account: 111113,
      spent: -300000,
      events: ["c"],
    },
    {
      id: 4,
      name: "haeun",
      type: "Recipients",
      account: 111114,
      spent: 100000,
      events: ["c"],
    },
    {
      id: 5,
      name: "prof.Hwang",
      type: "Recipients",
      account: 111115,
      spent: 100000,
      events: ["a"],
    },
  ]);

  return (
    <div className="App">
      <DisplayUsers users={users} preferences={preferences} />
      <NavigationBar
        preferences={preferences}
        setPreferences={setPreferences}
      />
    </div>
  );
}

export default App;
