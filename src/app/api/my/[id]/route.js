// import { NextResponse } from "next/server";

// export const GET = (req, res) => {
//   console.log(res.params.id);
//   // return Response(req.params.id);
//   //   return NextResponse.json(res.id);
// };

import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import { NextResponse } from "next/server";
import { useId } from "react";
const users = [
  { id: 1, name: "Mansoori", email: "mansoori@example.com" },
  { id: 2, name: "John Doe", email: "john@example.com" },
  { id: 3, name: "Jane Smith", email: "jane@example.com" },
];

// export async function GET(request, value) {
//   const { id } = value.params; // dynamic id
//   console.log("User ID:", id);

//   let userinfo = users.find((user) => user.id == id);

//   // Example response
//   return NextResponse.json({
//     message: `You requested user ${value.params.id}`,
//     data: userinfo,
//   });
// }

/* always write the DELETE Request inside the dynamic Route Because it will send the  user id with the api request 

  that id will help to find the data of the particular user for deleting from the database
*/

export const DELETE = async (req, value) => {
  let userid = value.params.id;
  console.log(userid);
  // let result = users.find((user) => user.id == userid);
  // console.log(result);
  if (!userid) {
    return NextResponse.json(
      {
        success: "user daleted succssfully",
      },
      { status: 300 },
      { success: true }
    );
  } else {
    return NextResponse.json(
      { message: "bad Request or id not found" },
      { success: false },
      { status: 400 }
    );
  }
};

export const PUT = async (req, { params }) => {
  const payload = await req.json();
  const empId = params.id;
  payload.empId = empId;

  console.log(payload);

  return new Response(
    JSON.stringify({ message: "Employee updated", data: payload }),
    { status: 200 }
  );
};
