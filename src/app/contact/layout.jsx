import React from "react";

const ContactCommmanLayout = ({ children }) => {
  return (
    <div>
      <h1>Hello This is Our Common Layout Page</h1>
      {/* use the childeren object property because it help to render the all the child component of this route */}
      {children}
    </div>
  );
};

export default ContactCommmanLayout;
