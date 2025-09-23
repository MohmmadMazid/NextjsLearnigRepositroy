import Link from "next/link";
import React from "react";

const Employees = () => {
  return (
    <div>
      <h1>This Is The main Page Of the Employee Details</h1>
      <div>
        <h1>See The employees Details</h1>
        <Link href="/employees/mazid">Mazid</Link>
        <br />
        <br />
        <Link href="/employees/vijeta">Vijeta</Link>
        <br />
        <br />
        <Link href="/employees/ragini">Ragini</Link>
        <br />
      </div>
    </div>
  );
};

export default Employees;
