import React from 'react';
import StartButton from './StartButton';

const toolsData = [
  {
    title: 'TUTOR',
    descriptions: [
      'This tool is designed to break down any medical topic or medication focusing on the key segments needed for medical education.',
      'For topics it includes; definition, pathophysiology, clinical presentation, diagnosis, treatment, risk factors, prevention, pathological findings, complications, and prognosis.',
      'Simply state which topic or drug you would like to learn and let the tool teach you!',
    ],
    videoUrl: 'https://drive.google.com/file/d/1DpIZcRqvTo987fBkUF8BFw6KmdowW6LK/preview',
  },
  {
    title: 'QUESTION BANK',
    descriptions: [
      'This tool is designed to teach you by using multiple choice questions.',
      'Simply state the topic you would like to be tested on and the tool will provide you with USMLE style practice questions and provide in-depth explanations for medical learning.',
      'You will be given the opportunity to answer questions individually and the tool will give in-depth explanations for the topic of each question.',
    ],
    videoUrl: 'https://drive.google.com/file/d/1ohaFH2EESpRwkeSb5mTh9_7oKle-HVn5/preview',
  },
];

const ExploreLearningTools = () => {
  return (
    <>
    <div className="mx-auto w-full max-w-[240px] xs:max-w-[240px] sm:max-w-[360px] md:max-w-[576px] lg:max-w-[768px] xl:max-w-[960px] 2xl:max-w-[1152px] 3xl:max-w-[1296px] h-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8">
      <p className="text-2xl w-full sm:text-3xl md:text-4xl font-bold mt-8 sm:mt-12 md:mt-16">
        EXPLORE LEARNING TOOLS
      </p>
      <p className="text-sm sm:text-base mt-4 mb-8 sm:mb-10 md:mb-12">
        *Due to recent updates, tutorials may vary slightly from the actual functionality of the tools. Please see our User Manual for further information on how to best use the tools.
      </p>

      {toolsData.map((tool, index) => (
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 my-8 sm:my-10 md:my-12"
          key={index}
        >
          <div className="text-left">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{tool.title}</p>
            {tool.descriptions.map((desc, idx) => (
              <p className="text-sm sm:text-base mb-2 sm:mb-3 md:mb-4" key={idx}>
                {desc}
              </p>
            ))}
          </div>
          <div className="relative w-full h-0 pb-[56.25%] sm:pb-[75%] md:pb-[56.25%] lg:pb-[50%]">
            <iframe 
              src={tool.videoUrl} 
              className="absolute top-0 left-0 w-full h-full" 
              allow="autoplay">
            </iframe>
          </div>
        </div>
      ))}
    </div>
    <StartButton />
    </>
  );
};

export default ExploreLearningTools;
