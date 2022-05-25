import React, { useEffect, useState } from "react";

const UseAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const email = user?.email;
    console.log(email);
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.admin);
        });
    }
  }, [user]);
  return [admin];
};

export default UseAdmin;