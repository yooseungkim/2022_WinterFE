import React from "react";
import personSrc from "../img/person.png";

function CreateUser({ name }) {
  return (
    <div className="user">
      <img className="icon" src={personSrc} />
      <br />
      <span className="name"> {name} </span>
    </div>
  );
}

function CreateType({ users, type }) {
  return (
    <div id="type">
      <h2> {type} </h2>
      <div>
        {users
          .filter((user) => user.type === type)
          .map((user) => (
            <CreateUser name={user.name} />
          ))}
      </div>
      <hr />
    </div>
  );
}
function DisplayUsers({ users }) {
  return (
    <div className="users">
      <CreateType users={users} type="Depositors" />
      <CreateType users={users} type="Manager" />
      <CreateType users={users} type="Recipients" />
    </div>
  );
}

export default DisplayUsers;
