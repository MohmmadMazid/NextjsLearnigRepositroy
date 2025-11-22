import React from "react";
import EventsHanldingInServerComponent from "./EventsHanldingInServerComponent";
import styles from "../custome.module.css";
import DeletePost from "@/components/DeletePost";
export const metadata = {
  title: "My Post Page",
  description: "it is created for the post page",
};
// this way you can fetch the data in the server side component without using any hooks or state
let postsFunction = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  return posts; // this will return the promises to the function call so use the await keyword for getting data
};

const ServerSideDataFetching = async () => {
  /*
    we can also make the function inside the component like this

    let postsFunction = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await response.json();
      return posts; // this will return the promises to the function call so use the await keyword for getting data
    };
  */
  let postsdata = await postsFunction(); // because this function is getting the promise so I have used the await keyword for resolving the promise and getting data

  return (
    <div>
      <div className={styles.demo}>
        <h1>Fetching Posts Data in The Server side Component</h1>
      </div>
      <ul>
        {postsdata.map((el) => {
          return (
            <li key={el.id} className={styles.list}>
              <h3>{el.title}</h3>
              {/* <EventsHanldingInServerComponent /> */}
              <DeletePost id={el.id} />
              {/* this is for handling event at the servers side */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServerSideDataFetching;
