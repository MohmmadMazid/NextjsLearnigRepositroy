// import { connectionString } from "@/lib/dbconnection/db_connection";
import Employee from "@/lib/dbconnection/models/employee";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/company");

  const empData = await Employee.find();

  return NextResponse.json(
    { message: "db connected successfully", data: empData },
    { status: 200 }
  );
};

// inserting data into the database using post request but this data is not dynamic data
// export const POST = async () => {
//   await mongoose.connect("mongodb://127.0.0.1:27017/company");
//   let data = new Employee({
//     name: "jogesh",
//     salary: "60k",
//     department: "IT",
//   });
//   let newdata = await data.save();

//   return NextResponse.json({ result: newdata });
// };

export const POST = async (req) => {
  try {
    let payload = await req.json();

    await mongoose.connect("mongodb://127.0.0.1:27017/company");

    let data = new Employee(payload);
    let newdata = await data.save();

    return NextResponse.json({ result: newdata });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
