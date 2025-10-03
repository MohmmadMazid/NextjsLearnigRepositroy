import Image from "@/lib/dbconnection/models/image";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    let data = await request.formData();
    let file = data.get("file");
    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bufferdata = await file.arrayBuffer();
    const buffer = Buffer.from(bufferdata);

    await mongoose.connect("mongodb://127.0.0.1:27017/company");

    const uploadImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });

    await uploadImage.save();

    return NextResponse.json({
      success: true,
      message: "image uploaded successFully",
    });
  } catch (error) {
    return NextResponse({
      success: false,
      message: "file not uploaded in MongoD",
    });
  }
};
