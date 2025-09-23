import React from "react";

// this  is the global page-not found
// when any route which are not present then it will be renderd
const GlobalNotFoundPage = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "aqua",
          color: "purple",
        }}
      >
        <h1>The Page You Are Looking For Not Found :404</h1>
      </div>
    </div>
  );
};

export default GlobalNotFoundPage;
