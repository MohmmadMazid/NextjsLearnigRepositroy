import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <h3>Contact Page</h3>
      <Link href="/home">Back To Home Page</Link>
      <div>
        <h1>We Have Tow Types of Contact</h1>
        <Link href="/contact/empContact">employee_Contact</Link>
        <br />
        <Link href="/contact/comContact">Company_Contact</Link>
      </div>
    </div>
  );
};

export default Contact;
