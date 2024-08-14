import React from 'react';

const benefitsData = [
  {
    imgSrc: '/time-saving-icon.png',
    altText: 'Time saving icon',
    title: 'Time saving',
    description: 'Recipes generated within 1 minute!',
  },
  {
    imgSrc: '/customizable-icon.png',
    altText: 'Customizable icon',
    title: 'Customizable',
    description: 'Meals to suit any preference!',
  },
  {
    imgSrc: '/health-conscious-icon.png',
    altText: 'Health conscious icon',
    title: 'Health-Conscious',
    description: 'Can meet your every health need!',
  },
  {
    imgSrc: '/efficiency-icon.png',
    altText: 'Efficiency icon',
    title: 'Convenience',
    description: 'Cook smarter, not harder, with AI assistance!',
  },
];

const descriptionPoints = [
  {
    title: '1. Ingredient-based recipes',
    description: 'Discover delicious recipes based on ingredients you have on hand.',
  },
  {
    title: '2. AI-assisted cooking',
    description: 'Cook like a pro with our AI-powered assistant. Get customized recipe instructions to satisfy all hunger needs.',
  },
];

const Benefits = () => {
  return (
    <>
      <section className="features flex flex-wrap justify-around py-10">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="feature bg-lime-50 p-5 rounded-lg shadow-md text-center m-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:1/6"
          >
            <img src={benefit.imgSrc} alt={benefit.altText} className="w-12 mb-4" />
            <h3 className="text-black text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-black">{benefit.description}</p>
          </div>
        ))}
      </section>
      <section className="description text-center py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">EFFORTLESSLY PLAN MEALS</h2>
        <p className="text-black mb-6 px-4 md:px-0">
          Say goodbye to meal planning stress and hello to easy, personalized meal planning and customization with I&aposm Hungry AI.
        </p>
        <div className="points flex flex-wrap justify-around">
          {descriptionPoints.map((point, index) => (
            <section
              key={index}
              className="hero flex flex-wrap items-center justify-between bg-lime-50 p-6 md:p-10 rounded-lg w-full md:w-1/2 lg:w-1/3 m-4"
            >
              <div className="point text-left max-w-md">
                <h3 className="text-black text-lg md:text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-black">{point.description}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default Benefits;
