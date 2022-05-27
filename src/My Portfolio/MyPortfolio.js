import React from "react";
import profile from "../../src/assets/images/profile.jpg";

const MyPortfolio = () => {
  return (
    <div>
      <div class="card card-side mt-20 bg-base-100 shadow-xl mx-12">
        <figure>
          <img style={{ width: "350px" }} src={profile} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Name : Sarafat Ali Adir</h2>
          <h2> Email Address : adir.aiub26@gmail.com</h2>
          <h2> Education : Computer Science and Engineering</h2>
          <h2> Skills : HTML, CSS, JavaScript,React,Firebase,NodeJS,Mongodb</h2>
          <h2>
            {" "}
            Projects : Go Travel : https://go-travel-c2715.web.app, <br />
            Puma Bangladesh : https://amazing-taffy-10a00e.netlify.app/home{" "}
            <br />
            Powersurge Supplements : https://powersurge-supplements.web.app/
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
