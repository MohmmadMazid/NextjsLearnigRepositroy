import React from "react";
import EventsHanldingInServerComponent from "./EventsHanldingInServerComponent";

// this way you can fetch the data in the server side component without using any hooks or state
let postsFunction = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  return posts; // this will return the promises to the function call so use the await        keyword for getting data
};
const ServerSideDataFetching = async () => {
  let postsdata = await postsFunction(); // because this function is getting the promise so i have used the await key port for resolving the promise and getting data
  //   console.log("postsdata", postsdata);
  return (
    <div>
      <div>
        <h1>Fetching Posts Data in The Server side Component</h1>
      </div>
      <ul>
        {postsdata.map((el) => {
          return (
            <li key={el.id}>
              <h3>{el.title}</h3>
              <EventsHanldingInServerComponent />
              {/* this is for handling event at the servers side */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServerSideDataFetching;
