import React from "react";
import lightning from "../assets/images/lightning.jpg";
import repair from "../assets/images/repair.jpg";
import electronics from "../assets/images/electronics.jpg";
import performance from "../assets/images/performance.jpg";
import bodyparts from "../assets/images/bodyparts.jpg";
import wheels from "../assets/images/wheels.jpg";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <section class="my-20 w-full">
      <div>
        <h1 class="text-5xl font-bold text-center">
          {" "}
          <span class="text-primary">PARTS</span> FOR YOUR CAR{" "}
        </h1>
      </div>
      <div class="grid my-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <div class=" flex-col">
          <div class="w-30 text-center border max-auto">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <div class="text-center font-bold mt-2">
            <CountUp end={200} duration={2}></CountUp>
            <p>Countries</p>
          </div>
        </div>

        <div class="flex-col">
          <div class="w-30 text-center border max-auto">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>PROJECTS</p>
          </div>
        </div>
        <div class=" flex-col">
          <div class="w-30 text-center border max-auto">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>CLIENTS</p>
          </div>
        </div>
        <div class=" flex-col">
          <div class="w-30 text-center border max-auto">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>FEEDBACKS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
