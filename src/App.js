import React from "react";
import "./App.css";
import DisplayUsers from "./js/DisplayUsers";
import NavigationBar from "./js/NavigationBar";

function App() {
  const [users, setUsers] = React.useState([
    { id: 1, name: "yooseung", type: "Manager" },
    { id: 2, name: "sungjun", type: "Depositors" },
    { id: 3, name: "jangwon", type: "Depositors" },
    { id: 4, name: "haeun", type: "Recipients" },
    { id: 5, name: "prof.Hwang", type: "Recipients" },
  ]);

  return (
    <div className="App">
      <DisplayUsers users={users} />
      <NavigationBar />
    </div>
  );
}

export default App;
