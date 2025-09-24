"use client";
// this is the client side data fetching that is why we have use "use client " directives

import React, { useEffect, useState } from "react";

const UsersData = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    const getingUserData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      //   console.log(data);
      setUsers(data);
    };
    getingUserData();
    // console.log(users);
  }, []);

  // i have used the useEffect hook for the data fetching on the time mounting  of the component on the browsers

  const handleClick = () => {
    alert("handling event at the client component");
  };
  return (
    <div>
      <div>
        <h1>Fetching Users Data In The Client Side Component</h1>
      </div>
      <ol>
        {users.map((el) => {
          return (
            <li key={el.id}>
              <h3>{el.name}</h3>
              <button onClick={handleClick}>click me</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default UsersData;
