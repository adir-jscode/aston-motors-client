import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const { data: purchase, isLoading } = useQuery(["purchase", id], () =>
    fetch(`http://localhost:5000/part/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="text-center">
      <h1 class="text-4xl">
        Welcome <span class="text-success font-bold">{user.displayName}</span>{" "}
      </h1>
      <h1>Purchase for {id}</h1>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-center">
            <h1 class="text-5xl font-bold">{purchase.name}</h1>
            <figure>
              <img
                class="mx-auto"
                style={{ width: "150px" }}
                src={purchase.image}
                alt="Shoes"
              />
            </figure>
            <p class="py-6">{purchase.description}</p>
            <p class="font-bold">Price: ${purchase.price}</p>
            <p class="font-bold">
              Available Quantity:{purchase.availableQuantity}
            </p>
            <p class="font-bold">Minimum Quantity:{purchase.minimumQuantity}</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={user.email}
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Confirm Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
