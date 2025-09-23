// "use client";
import React from "react";

const EmployeeDetials = async ({ params }) => {
  console.log(await params);
  let name = await params.empdetails;
  // whatever data is comming from the params means as a dynamic routing params we will get all of them
  // using params which is inbuilt next js feature
  return (
    <div>
      <div>
        <h1>employee details is given below</h1>
        <h2>Employee Name :{name}</h2>
      </div>
    </div>
  );
};

export default EmployeeDetials;
