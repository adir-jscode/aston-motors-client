import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("http://localhost:5000/part", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Number of products {parts.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr class="text-white">
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Remove </th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{part.name}</td>
                <td>{part.price}</td>
                <td>{part.availableQuantity}</td>
                <td>
                  <button class="btn btn-error">DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
