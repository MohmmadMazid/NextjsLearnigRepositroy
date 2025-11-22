"use client";
import { useParams } from "next/navigation";

const Blog = () => {
  let params = useParams();
  console.log(params.Blog);
  for (let i = 0; i < params.blog.length; i++) {
    console.log(params.blog[i]);
  }
  return (
    <div>
      <h1>My Blog Post</h1>
      <ul>
        {params.blog.map((el, i) => {
          return (
            <li key={i}>
              <h3>{el}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;

/*
    another way of getting dynamic data or catching all the segments

    "use client";
import { useParams } from "next/navigation";
import { use } from "react";
const Blog = ({ params }) => {
  let { blog } = use(params);

  console.log(blog);
  return (
    <div>
      <h1>My Blog Post</h1>
      <ul>
        {blog.map((el, i) => {
          return (
            <li key={i}>
              <h3>{el}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;

*/
