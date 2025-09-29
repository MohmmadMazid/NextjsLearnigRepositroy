// import { NextResponse } from "next/server";

// export const GET = (req, res) => {
//   console.log(res.params.id);
//   // return Response(req.params.id);
//   //   return NextResponse.json(res.id);
// };

import { NextResponse } from "next/server";
const users = [
  { id: 1, name: "Mansoori", email: "mansoori@example.com" },
  { id: 2, name: "John Doe", email: "john@example.com" },
  { id: 3, name: "Jane Smith", email: "jane@example.com" },
];

export async function GET(request, value) {
  const { id } = value.params; // dynamic id
  console.log("User ID:", id);

  let userinfo = users.find((user) => user.id == id);

  // Example response
  return NextResponse.json({
    message: `You requested user ${value.params.id}`,
    data: userinfo,
  });
}
