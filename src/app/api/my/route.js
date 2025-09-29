import { NextResponse } from "next/server";

// export const GET = (request) => {
//   return new Response("hello This is my first API call In next js");
// };

export const GET = async (request) => {
  return NextResponse.json([
    { id: 1, name: "Mansoori", email: "mansoori@example.com" },
    { id: 2, name: "John Doe", email: "john@example.com" },
    { id: 3, name: "Jane Smith", email: "jane@example.com" },
  ]);
};

// export const GET = async (request) => {
//   return NextResponse.json({
//     name: "next js ",
//     courseduration: "1 month",
//     fee: "10000",
//   });
// };
