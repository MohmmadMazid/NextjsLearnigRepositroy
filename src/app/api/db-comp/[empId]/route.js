import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Employee from "@/lib/dbconnection/models/employee";

// updating Route
export const PUT = async (req, { params }) => {
  let empID = params.empId;
  let payload = await req.json();
  let id = { _id: empID };
  //   console.log(id);
  //   console.log(empdata);

  await mongoose.connect("mongodb://127.0.0.1:27017/company");

  let result = await Employee.findByIdAndUpdate(id, payload);

  return NextResponse.json({ result, success: true });
};

// emp data geting Route
export const GET = async (req, { params }) => {
  let empID = params.empId;
  let id = { _id: empID };

  await mongoose.connect("mongodb://127.0.0.1:27017/company");

  let result = await Employee.findById(id);

  return NextResponse.json({ result, success: true });
};

// deleting Route

export const DELETE = async (req, { params }) => {
  let empID = params.empId;
  let id = { _id: empID };

  await mongoose.connect("mongodb://127.0.0.1:27017/company");

  let result = await Employee.findByIdAndDelete(id);

  return NextResponse.json({ result, success: true });
};
