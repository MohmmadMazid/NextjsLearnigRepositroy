import React from "react";
import Image from "next/image";
import next from "../../../src/next.svg"; // this is the way of importing image from any directory of the project
// this import iporting  will show the image on ui when the image is not present int the public directory

// but if the image is present in the public directory then you can use the image without importing it
// like this <Image src="/vercel.svg" alt="this is the image" width={500} height={250} />
// this is the way of using image when the image is present in the public directory

const ImageOptimization = () => {
  // this function is for the loader attribute which help to set the height and width of the image whatever user specifed
  const myImageLoader = ({ src, width, quality }) => {
    return `https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&${width}=500&q=80`;
  };

  return (
    <div>
      <div>
        <h1>This Page is For Image optimiization In Next.js</h1>
      </div>
      <div>
        {/* this is for the when image is present in the public folder without importing image  */}
        <Image
          src="/globe.svg"
          alt="this is the image"
          width={500}
          height={250}
        />
      </div>
      <div>
        {/* this is for when you importing image from any directory of the project   */}
        <Image src={next} alt="this is the image" width={500} height={250} />
      </div>

      <div>
        {/*  this is way of using image in the ui when the image is getting from third party like unsplash
         or cloudinary as a url or we can say we are getting the image as url from another doman  */}

        <Image
          //   loader={myImageLoader} // this is the way of using the loader attribute
          // dont use the loader attribute when you have allready full url of the image
          alt="unsplash image"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default ImageOptimization;
