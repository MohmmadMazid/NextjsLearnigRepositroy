"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

const LoadingDtatUsingLoader = () => {
  const [postdata, setPostdata] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    return data;
  }

  useEffect(() => {
    let postsdata = async () => {
      let data = await fetchData();
      console.log(data);
      setPostdata(data);

      setLoading(false);
    };
    postsdata();
  }, []);
  return (
    <div>
      <div>This is The Loder Concept </div>
      <div>
        <h2>The Loader will be visible untill the will be displayed</h2>
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          postdata.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid black",
                  margin: "20px",
                  padding: "15px",
                  borderRadius: "30px",
                  color: "darkblue",
                  backgroundColor: "#f0f8ff",
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LoadingDtatUsingLoader;
