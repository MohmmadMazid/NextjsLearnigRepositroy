"use client";

import { useRouter } from "next/navigation";

const DeleteEmpRecord = ({ id }) => {
  const router = useRouter();
  console.log("emp id is ", id);
  const handleDelteEmp = async () => {
    let res = await fetch(`http://localhost:3000/api/db-comp/${id}`, {
      method: "DELETE",
    });
    let result = await res.json();
    console.log("data deleted", result);

    if (result.success) {
      alert("data deleted successfully");
      router.push("/mongo-get-emp");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <div>
      <button onClick={handleDelteEmp}>delete</button>
    </div>
  );
};

export default DeleteEmpRecord;
