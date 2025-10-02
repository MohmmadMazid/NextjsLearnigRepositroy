"use client";
import React, { useState } from "react";

const UploadImageInNext = () => {
  let [file, setFile] = useState(null);

  const handleImageInput = (e) => {
    setFile(e.target.files?.[0]); // here you have to write the files not file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);

    if (!file) {
      alert("please select a file to Upload");
      return;
    }

    const data = new FormData();
    data.append("file", file);

    // now make a api call to Upload the image in next environment

    try {
      let res = await fetch("http://localhost:3000/api/upload-image", {
        method: "POST",
        body: data,
      });
      let result = await res.json();
      if (result.success) {
        alert("image uploaded successfully");
      } else {
        alert("Image Failed To Uploads");
      }
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };
  return (
    <div>
      <div>
        <h1>Upload Image In Next Js</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleImageInput}></input>
          <br />
          <br />
          <button type="submit">sumit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadImageInNext;
