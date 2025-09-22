"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  const handleNavigation = (route) => {
    router.push(route);
  };
  return (
    //  in this commit we are going to learn Linking and Navigation
    // LINKING - When we use the LINK for the naviagting from one page to another page then it is called LINKING
    //NAVIGATION- When we use the Button for navigation from one page to the another page then it is called Navigation

    // we will use both technology for the navigation in this commit

    <div>
      <h1>Home page</h1>
      <div>
        <Link href="/about">About</Link>
        <br></br>
        <Link href="/contact">Contact</Link>
        <br></br>
        <Link href="/service">Service</Link>
        <br></br>
      </div>
      <div>
        <button onClick={() => handleNavigation("/about")}>About</button>
        <br></br>
        <button onClick={() => handleNavigation("/contact")}>Contact</button>
        <br></br>
        <button onClick={() => handleNavigation("/service")}>Service</button>
        <br></br>
      </div>
    </div>
  );
};

export default Home;
