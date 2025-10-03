"use client";
import React, { useState } from "react";

const UploadImageInMongo = () => {
  const [images, setImages] = useState([]);

  const handleInputChange = async (e) => {
    setImages(e.target.files?.[0]); // this is for handling the multiple select of files it will thakes only first index images if there is multiple images
  };

  const handleSubmitImages = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    console.log(images);

    if (images.length == 0) {
      alert("please select a image file!");
      return;
    }
    let data = new FormData();
    data.append("file", images);
    // now writing the api post route to upload Image in MongoDB

    try {
      let res = await fetch("http://localhost:3000/api/upload-imageIn-mongo", {
        method: "POST",

        body: data,
      });

      let result = await res.json();
      console.log("result is ", result);
      if (result.success) {
        alert("image uploaded in mongodb is successfully");
      } else {
        alert("failed to upload image in mongodb");
      }
    } catch (err) {
      console.log(err);
      alert("failed to upload ");
    }
  };
  return (
    <div>
      <h1>Upload Image In MongoDB</h1>
      <div>
        <form onSubmit={handleSubmitImages}>
          <input type="file" name="file" onChange={handleInputChange}></input>
          <br></br>
          <br></br>
          <button type="submit">upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadImageInMongo;
