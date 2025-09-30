import React from "react";
import fetchData from "../fetchdata";
import Link from "next/link";
const UserData = async ({ params }) => {
  let data = await fetchData();
  let user = await data;
  let id = params.id;
  let userInfo = data[id - 1];
  //   console.log(userInfo);
  return (
    <div>
      <h1>Dynamc User Data is Here </h1>
      <div
        style={{
          backgroundColor: "lightblue",
          color: "darkblue",
          border: "2px solid green",
          borderRadius: "10px ",
          margin: "20px",
          padding: "20px",
        }}
      >
        <h1>Name:{userInfo.name}</h1>
        <h1>UserName:{userInfo.username}</h1>
        <h1>email:{userInfo.email}</h1>
        <h1>Phone:{userInfo.phone}</h1>
        <h1>Website:{userInfo.website}</h1>
        <Link href="/ssg">back</Link>
      </div>
    </div>
  );
};

export default UserData;

/*
We use generateStaticParams to pre-generate all dynamic routes at
 build time so our app is faster, SEO-friendly, 
and doesn’t need to fetch data on every request.
*/

export const generateStaticParams = async () => {
  const data = await fetchData();
  const users = await data;
  return users.map((user) => ({
    id: user.id.toString(),
  }));
};
