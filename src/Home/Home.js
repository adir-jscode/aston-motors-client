import React from "react";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import FindParts from "./FindParts";
import OurCommitment from "./OurCommitment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurCommitment></OurCommitment>
      <FindParts></FindParts>

      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
