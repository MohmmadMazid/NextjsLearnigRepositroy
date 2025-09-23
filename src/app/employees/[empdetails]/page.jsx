"use client";
import { useParams } from "next/navigation";
import React from "react";

// second way of dynamic routing

// remember one thing dynamic folder name and its functional component Name should be the same
// if both are not same then you will find the error of name conflicting
const empdetails = () => {
  const params = useParams();
  console.log(params.empdetails);
  //   let name = await params.empdetails;

  return (
    <div>
      <div>
        <h1>employee details is given below</h1>
        <h2>Employee Name :{params.empdetails}</h2>
      </div>
    </div>
  );
};

// first way getting dynamic pararms

// const EmployeeDetials = async ({ params }) => {
//   console.log(await params);
//   let name = await params.empdetails;
//   // whatever data is comming from the params means as a dynamic routing params we will get all of them
//   // using params which is inbuilt next js feature
//   return (
//     <div>
//       <div>
//         <h1>employee details is given below</h1>
//         <h2>Employee Name :{name}</h2>
//       </div>
//     </div>
//   );
// };

export default empdetails;
