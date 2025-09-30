"use client";

import { useState } from "react";

const MongoAddEmp = () => {
  const [emp, setEmp] = useState({
    name: "",
    salary: "",
    department: "",
  });

  const handleInputChanage = (e) => {
    setEmp((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/db-comp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emp),
    });
    let data = await res.json();
    console.log("data added successfully");
    setEmp({
      name: "",
      salary: "",
      department: "",
    });
    console.log(emp);
  };
  return (
    <div>
      <div>
        <h1>
          Adding Employee Using MongoDB || Through Next Js UI we will ADD the
          emp
        </h1>
        {/* <form onSubmit={handleSubmit}> */}
        <h1>Enter Emp Details</h1>
        <input
          type="text"
          name="name"
          value={emp.name}
          placeholder="enter emp name"
          onChange={handleInputChanage}
        />
        <br />
        <br />
        <input
          type="text"
          name="salary"
          value={emp.salary}
          placeholder="enter emp name"
          onChange={handleInputChanage}
        />
        <br />
        <br />
        <input
          type="text"
          name="department"
          value={emp.department}
          placeholder="enter emp name"
          onChange={handleInputChanage}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>submit</button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default MongoAddEmp;
