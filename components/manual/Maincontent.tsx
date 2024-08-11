import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  steps: string[];
  children?: ReactNode;
}

const MainContent: React.FC = () => {
  const sections = [
    {
      title: "How to use the Tutor",
      steps: [
        "• State a medical topic in text box to begin learning.",
        "• Select 'test me' to create a MCQ on the topic.",
        "• Select 'deep dive' for a more in-depth explanation on a certain segment of the topic.",
        "• State a medication in the text box to get a detailed pharmacological explanation on the drug."
      ],
      note: "*In the event of a glitch or if you do not agree with a response, select the thumbs down icon and provide feedback to help the bot improve."
    },
    {
      title: "How to use the Question Bank",
      steps: [
        "• State a medical topic in text box to begin creating questions on that topic.",
        "• State your answer or select 'What’s the answer' to get the explanation.",
        "• Select 'Next Question' to continue creating questions."
      ],
      note: "*In the event of a glitch or if you do not agree with a response, select the thumbs down icon and provide feedback to help the bot improve."
    }
  ];

  return (
    <main className="p-8 mx-auto w-3/5 animate-fadeIn">
      <h1 className="m-6 text-xl font-light">USER MANUAL</h1>
      {sections.map((section, index) => (
        <Section key={index} title={section.title} steps={section.steps}>
          <p className="py-2 font-light">{section.note}</p>
        </Section>
      ))}
    </main>
  );
};

const Section: React.FC<SectionProps> = ({ title, steps, children }) => {
  return (
    <section className="p-6 animate-fadeIn">
      <h2 className="text-lg font-light">{title}</h2>
      <ol className="p-4">
        {steps.map((step, index) => (
          <li key={index} className="py-2 font-light">
            {step}
          </li>
        ))}
      </ol>
      {children}
    </section>
  );
};

export default MainContent;
