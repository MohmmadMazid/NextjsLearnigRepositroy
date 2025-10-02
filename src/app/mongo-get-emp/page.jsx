import Link from "next/link";
import React from "react";
const getEmpData = async () => {
  let res = await fetch("http://localhost:3000/api/db-comp", {
    cache: "no-store", // important line when you do not want to store the data int the cache
  });
  let empdata = await res.json();
  if (empdata.success) {
    return empdata.result;
  }
};

const MongoGetEmp = async () => {
  let allemp = await getEmpData();

  //   console.log(allemp);

  return (
    <div>
      <div>
        <h1>Getting Employee Data From MongoDB Database</h1>
      </div>
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {allemp.map((emp, i) => {
              return (
                <tr key={i}>
                  <td>{emp.name}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.department}</td>
                  <td>{emp._id}</td>
                  <td>
                    <Link href={`/mongo-get-emp/${emp._id}`}>update</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MongoGetEmp;
