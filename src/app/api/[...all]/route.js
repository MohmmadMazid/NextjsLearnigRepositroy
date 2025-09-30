import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  let myparams = params.all;
  console.log(myparams);
  return NextResponse.json({ message: myparams }, { status: 200 });
};
