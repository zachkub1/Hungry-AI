import React from "react";
import Header from "@/components/homepage/Header";
import Benefits from "@/components/homepage/Benefits";

const LandingPage = () => {
  return (
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto px-4 sm:px-5 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20 py-10">
        <Header />
        <Benefits />
      </div>
    </div>
  );
};

export default LandingPage;
