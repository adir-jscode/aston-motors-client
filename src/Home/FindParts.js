import React from "react";
import lightning from "../assets/images/lightning.jpg";
import repair from "../assets/images/repair.jpg";
import electronics from "../assets/images/electronics.jpg";
import performance from "../assets/images/performance.jpg";
import bodyparts from "../assets/images/bodyparts.jpg";
import wheels from "../assets/images/wheels.jpg";

const FindParts = () => {
  return (
    <section class="my-5 w-5/6 mx-auto">
      <div>
        <h1 class="text-5xl font-bold text-center">
          {" "}
          <span class="text-primary">PARTS</span> FOR YOUR CAR{" "}
        </h1>
      </div>
      <div class="grid my-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <div class="avatar flex-col">
          <div class="w-30 border rounded-full">
            <img src={lightning} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>LIGHTNING</p>
          </div>
        </div>

        <div class="avatar flex-col">
          <div class="w-30 border rounded-full">
            <img src={repair} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>REPAIR</p>
          </div>
        </div>
        <div class="avatar flex-col">
          <div class="w-30 border rounded-full">
            <img src={electronics} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>ELECTRONICS</p>
          </div>
        </div>
        <div class="avatar flex-col">
          <div class="w-30 border rounded-full">
            <img src={performance} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>PERFORMANCE</p>
          </div>
        </div>
        <div class="avatar flex-col">
          <div class="w-30 border rounded-full">
            <img src={bodyparts} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>BODY PARTS</p>
          </div>
        </div>
        <div class="avatar flex-col">
          <div class="w-30 border rounded-full">
            <img src={wheels} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>WHEELS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindParts;
