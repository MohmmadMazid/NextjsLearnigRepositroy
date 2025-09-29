import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json(); // read request body
    console.log(data);

    return NextResponse.json(
      {
        message: "data added successfully",
        received: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
