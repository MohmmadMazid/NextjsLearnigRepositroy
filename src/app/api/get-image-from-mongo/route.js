import Image from "@/lib/dbconnection/models/image";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const GET = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/company");

    let result = await Image.find().select("name data contentType");

    return NextResponse.json({ success: true, result });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "something went wrong in get api",
    });
  }
};
