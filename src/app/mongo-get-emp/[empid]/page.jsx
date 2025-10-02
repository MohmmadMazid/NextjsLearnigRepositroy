"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const UpdateEmployeeDetails = () => {
  //   let id = params.empid;
  const params = useParams();
  const id = params.empid;
  console.log(id);

  const [emp, setEmp] = useState({
    name: "",
    salary: "",
    department: "",
  });

  // now fetching data from the server and we will do it using useEffect

  useEffect(() => {
    const fetchdata = async () => {
      let res = await fetch(`http://localhost:3000/api/db-comp/${id}`);
      let data = await res.json();
      let result = data.result;
      if (data.success) {
        setEmp({
          name: result.name,
          salary: result.salary,
          department: result.department,
        });
      }
    };
    fetchdata();
  }, [id]);

  const handleInputChange = (e) => {
    setEmp((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatingData = async () => {
      let res = await fetch(`http://localhost:3000/api/db-comp/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emp),
      });
      let result = await res.json();
      console.log("result is ", result);
      if (result.success) {
        alert("data update successfully");
      } else {
        alert("something went wrong ");
      }
    };

    updatingData();
  };

  return (
    <div>
      <div>
        <h1>Upate Employee Details</h1>
      </div>
      <div>
        <h1>Free Filled Form Data</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={emp.name}
            name="name"
            onChange={handleInputChange}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            value={emp.salary}
            name="salary"
            onChange={handleInputChange}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            value={emp.department}
            name="department"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployeeDetails;
