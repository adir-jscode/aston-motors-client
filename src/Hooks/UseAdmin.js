import React, { useEffect, useState } from "react";

const UseAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    console.log(email);
    if (email) {
      fetch(`https://polar-citadel-98077.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default UseAdmin;
