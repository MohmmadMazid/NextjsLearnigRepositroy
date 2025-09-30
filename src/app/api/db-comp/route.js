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
