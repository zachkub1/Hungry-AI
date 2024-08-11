'use client';
import Feature from "@/components/homepage/Feature";

const Features = () => (
  <>
  <div className="bg-white w-full flex flex-col items-center">
  <p className="text-black text-2xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mt-8 mb-4 text-center">
      TOOLS AND FEATURES
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  w-full max-w-[70rem] mb-12 mx-auto px-4 sm:px-6 md:px-8">
      <Feature
        title="Question Bank"
        description={[
          "The Question Bank creates USMLE style practice questions.",
          "You can answer questions individually and it will provide an in-depth explanation for each question."
        ]}
      />
      <Feature
        title="Tutor"
        description={[
          "The Tutor will break down in detail any medical topic expanding on;",
          "Pathophysiology, Clinical presentation, Diagnostic tests, Treatment, Risk factors, Prevention, Complications, and Prognosis."
        ]}
      />
      <Feature
        title="Pharmacology"
        description={[
          "Use the tutor tool to learn about any medication. It is designed to focus on the key aspects of pharmacology needed to know for STEP exams. It will include; an overview, indications for use, mechanism of action, side effects, contraindications, toxicity, and monitoring."
        ]}
      />
      <Feature
        title="Understands Medical Jargon"
        description={[
          "Info tailored for medical terminology and jargon instead of layman’s language."
        ]}
      />
      <Feature
        title="Deep Dive"
        description={[
          "The Deep dive feature allows you to go into further detail on any specific segment of a medical topic. For example, you can delve deeper into specifics of treatment such as dosages, etc."
        ]}
      />
      <Feature
        title="Clinical Context and Credible Resources"
        description={[
          "Only references credible medical resources to provide medically accurate information and includes citations. Also explains concepts using clinically relevant cases."
        ]}
      />
    </div>
  </div>
  </>
);

export default Features;
