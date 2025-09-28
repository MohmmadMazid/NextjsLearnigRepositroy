"use client";
import React, { useEffect, useState } from "react";

import fetchData from "./fetchdata";
import Link from "next/link";
const page = () => {
  const [userdata, setUserdata] = useState([]);

  const getingData = async () => {
    let users = await fetchData();
    // console.log(users);
    setUserdata(users);
  };

  useEffect(() => {
    getingData();
  }, []);

  return (
    <div>
      <h1>Static Site Genration in Next js</h1>
      <div>
        {userdata.map((user) => {
          return (
            <div key={user.id}>
              <Link href={`ssg/${user.id}`}>
                <h2>{user.username}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
