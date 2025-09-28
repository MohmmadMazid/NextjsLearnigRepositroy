"use client";
import { useState } from "react";

import { redirect } from "next/navigation";
const RedirectionInNextJs = () => {
  // first we will use the bad practice then good practice
  //   redirect("/home");

  //   const [login, setLogin] = useState(true);

  //   if (!login) {                  // we will use the redirection method insidet the next.config file
  //     redirect("/home");
  //   }

  return (
    <div>
      <h1>Redirection Concept In Next Js</h1>
      {/* <button onClick={() => setLogin(false)}>logout</button> */}
    </div>
  );
};

export default RedirectionInNextJs;
