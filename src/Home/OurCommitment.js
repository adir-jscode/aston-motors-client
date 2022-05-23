import React from "react";
import car from "../assets/images/car.jpg";
const OurCommitment = () => {
  return (
    <section>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={car} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">
              ONE STOP SOLUTION FOR YOUR VEHICLE
            </h1>
            <p class="py-6">
              We have always pursued to ensure delivering the best quality and
              authentic spare parts products, and striven to create new values
              for all our clients as part of our commitment
            </p>
            <button class="btn btn-primary text-white">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
