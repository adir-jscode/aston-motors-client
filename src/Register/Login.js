import React from "react";

const Login = () => {
  return (
    <div class="flex h-screen bg-base-100 justify-center items-center">
      <div class="card w-96  bg-base-100 shadow-xl">
        <h1 class="text-4xl text-secondary font-bold text-center mt-4">
          Login
        </h1>
        <figure class="px-10 pt-10">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1653286621~exp=1653287221~hmac=64503d4ca106f5a72ef8b559e49b0350a6f4b88df19a62c9e5d7070ddcdaab33&w=740"
            alt="Shoes"
            class="rounded-xl w-60 bg-primary-content "
          />
        </figure>
        <div class="card-body items-center text-center">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
