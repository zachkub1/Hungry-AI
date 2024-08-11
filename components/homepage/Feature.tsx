import React from 'react';

interface FeatureProps {
  title: string;
  description: string[];
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="xs: w-80 bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg text-center ">
    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
      ✺ <br />
      {title}
    </p>
    {description.map((desc, index) => (
      <p key={index} className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 ">
        {desc}
      </p>
    ))}
  </div>
);

export default Feature;
