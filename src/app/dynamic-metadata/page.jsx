import React from "react";

const DynamicMetaData = () => {
  return (
    <div>
      <div>
        <h1>Generate Dynamic Metad Data For Search Engine Optimization</h1>
      </div>
    </div>
  );
};

// using this function use can make your dynamic metadat of the page
// that will help to SEO(Search engine optimization)
export async function generateMetadata() {
  return {
    title: "My Dynamic Title",
    description: "My dynamic description",
  };
}

export default DynamicMetaData;
