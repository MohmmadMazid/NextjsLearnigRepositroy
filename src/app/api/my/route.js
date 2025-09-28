import { NextResponse } from "next/server";

// export const GET = (request) => {
//   return new Response("hello This is my first API call In next js");
// };

export const GET = (request) => {
  return NextResponse.json({
    name: "next js ",
    courseduration: "1 month",
    fee: "10000",
  });
};
