"use client";

import { useEffect, useState } from "react";

const GettingMongoImage = () => {
  const [images, setImages] = useState([]);
  // for getting mongoImage At the Time of Mounting so for achieving this we have to use the useEffect react hoook

  useEffect(() => {
    const fetchingImages = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/get-image-from-mongo"
        );
        const result = await response.json();
        console.log("Fetched images:", result);
        if (result.success) {
          setImages(result.images);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchingImages();
  }, []);
  return (
    <div>
      <h1>All the MongoImages are Listed Below</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <div key={image._id} style={{ margin: "10px" }}>
            <img
              src={`data:${image.contentType};base64,${Buffer.from(
                image.data
              ).toString("base64")}`}
              alt={image.name}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingMongoImage;
