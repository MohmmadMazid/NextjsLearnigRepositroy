"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ContactCommmanLayout = ({ children }) => {
  // we are going to use common layout as a conditional layout because we just want to show this layout all the routes
  //except one route.
  // for achieving this we will be using the next hook which is (usePathName()) for getting the current route name

  const currentPathName = usePathname();
  console.log(currentPathName);
  return (
    <div>
      {currentPathName !== "/contact/empContact" ? (
        <h1>Hello This is Our Common Layout Page</h1>
      ) : null}
      {/* use the childeren object property because it help to render the all the child component of this route */}
      {children}
    </div>
  );
};

export default ContactCommmanLayout;
