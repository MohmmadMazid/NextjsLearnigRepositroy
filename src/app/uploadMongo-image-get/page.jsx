"use client";

import { useEffect, useState } from "react";

const GettingMongoImage = () => {
  const [images, setImages] = useState([]);
  // for getting mongoImage At the Time of Mounting so for achieving this we have to use the useEffect react hoook

  useEffect(() => {
    const fetchingImages = async () => {
      let res = await fetch("http://localhost:3000/api/get-image-from-mongo");
      let data = await res.json();
      console.log(data);
      if (data.success) {
        let allImages = data.result;
        console.log(allImages);
        setImages(data.result);
      } else {
        alert("images are not found so please try again after sometime");
        return;
      }
    };

    fetchingImages();
  }, []);
  return (
    <div>
      <h1>All the MongoImages are Listed Below</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "30px",
          padding: "20px",
        }}
      >
        {images.map((image) => {
          return (
            <div key={image._id}>
              <img
                src={`data:${image.contentType};base64,${Buffer.from(
                  image.data
                ).toString("base64")}`}
                alt={image.name}
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              />
              <p>{image.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GettingMongoImage;
