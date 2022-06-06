import React from "react";
import porsche from "../../src/assets/images/slap3.jpg";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen" style={{ background: `url(${porsche})` }}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-6xl text-white font-bold">Aston</h1>
            <p class="text-white mb-5">OVER 60 YEARS OF BUSINESS THROUGHOUT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
