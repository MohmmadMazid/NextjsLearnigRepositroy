import React from "react";

const NestedRedirection = ({ params }) => {
  return (
    <div>
      <h1>This is The nested redirection Page </h1>
      <h1>The Redirectional Id is : {params.id}</h1>
    </div>
  );
};

export default NestedRedirection;
