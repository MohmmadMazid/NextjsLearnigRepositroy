"use client";
import { useRouter } from "next/navigation";
import React from "react";

const employeeContact = () => {
  const router = useRouter();
  const handleNavigation = (route) => {
    router.push(route);
  };
  return (
    <div>
      <h1>Employee Contact</h1>
      <button onClick={() => handleNavigation("/contact")}>
        Back To Contact Main page
      </button>
    </div>
  );
};

export default employeeContact;
