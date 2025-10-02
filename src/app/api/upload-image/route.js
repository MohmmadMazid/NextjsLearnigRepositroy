import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

/* firs way of uploading images in next js 

export const POST = async (request) => {
  let data = await request.formData();
  let file = data.get("file");
  console.log("file info", file);

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bufferdata = await file.arrayBuffer();
  const buffer = Buffer.from(bufferdata);
  const path = `./public/uploads/${file.name}`;
  try {
    await writeFile(path, buffer);
    return NextResponse.json({
      response: "Successfully Uploaded",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
}
};
*/

/* second way and the better way of uploading images in next js */

export const POST = async (request) => {
  try {
    const data = await request.formData();
    const file = data.get("file"); // or "image" depending on frontend

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Optional: create full path with correct directory
    const uploadPath = path.join(process.cwd(), "public", "uploads", file.name);
    // process.cwd();

    // Ensures the path works on different environments (dev or prod).

    // Avoids relying on relative path like ./public/uploads.

    // file.name handling
    // You might want to sanitize or rename the file in real apps to prevent security issues or name clashes.

    await writeFile(uploadPath, buffer);

    return NextResponse.json({
      success: true,
      response: "Successfully Uploaded",
      url: `/uploads/${file.name}`, // Can return the public URL
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 }
    );
  }
};
