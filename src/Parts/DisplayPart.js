import React from "react";
import { Link } from "react-router-dom";

const DisplayPart = ({ part }) => {
  const {
    _id,
    image,
    price,
    description,
    name,
    minimumQuantity,
    availableQuantity,
  } = part;

  return (
    <div>
      <div class="card h-96 lg:max-w-lg bg-base-100 shadow-xl mx-12 my-5">
        <figure>
          <img style={{ width: "150px" }} src={image} alt="Shoes" />
        </figure>
        <div class="card-body h-auto  justify-center">
          <h2 class="card-title">{name}</h2>

          <h2 class=" card-title text-sm">Price:$ {price}</h2>
          <h2 class=" card-title text-sm">
            Minimum Quantity: {minimumQuantity}
          </h2>
          <h2 class=" card-title text-sm">
            <span class="text-green-700 font-bold">Available Quantity:</span>{" "}
            {availableQuantity}
          </h2>
          <div class="card-actions">
            <button>
              <Link to={`/purchase/${_id}`} class="btn btn-primary">
                PURCHASE
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPart;
