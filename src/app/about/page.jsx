import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Link href="/home">Back To Home Page</Link>
    </div>
  );
};

export default About;
