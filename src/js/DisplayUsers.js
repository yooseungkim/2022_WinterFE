import react from "react";
import React from "react";
import personSrc from "../img/person.png";

function DisplayUsers({ users, preferences }) {
  function CreateUser({ user }) {
    const [preferences, setPreferences] = React.useState(
      JSON.parse(localStorage.getItem("preferences"))
    );
    const onClick = () => {
      console.log(`Name: ${user.name}`);
      console.log(`Account: ${user.account}`);
      console.log(`Money Spent: ${user.spent}`);
      console.log(`Participated Events: ${user.events}`);
      console.log("============================");
    };
    return (
      <div className="user" onClick={onClick}>
        {preferences.displayIcon ? (
          <img className="icon" src={personSrc} />
        ) : null}
        <br />
        <span>{user.name}</span>
        <br />
        {preferences.displayMoney ? <span>{user.spent}</span> : null}
      </div>
    );
  }

  function CreateType({ type }) {
    const onClickDescription = () => {
      if (type === "Depositors") {
        console.log("Depositors have to send money");
      } else if (type === "Manager") {
        console.log("Manager is the one who spent the most money");
      } else if (type === "Recipients") {
        console.log(
          "Recipients are the ones who spent more money; in some cases, there can be no Recipients"
        );
      }
    };
    return (
      <div id="type">
        <h2 onClick={() => onClickDescription({ type })}> {type} </h2>
        <div>
          {users
            .filter((user) => user.type === type)
            .map((user) => (
              <CreateUser user={user} />
            ))}
        </div>
        <hr />
      </div>
    );
  }

  return (
    <div className="users">
      <CreateType users={users} type="Depositors" />
      <CreateType users={users} type="Manager" />
      <CreateType users={users} type="Recipients" />
    </div>
  );
}

export default DisplayUsers;
