
import StartButtonWhite from "./StartButtonWhite";
import ResponsiveSVG2 from "./wave2";

const Testimonials = () => (
  <>
  <div className="bg-white w-full mt-20-white">
  <p className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mt-8 mb-4">
      Testimonials
    </p>
    <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-x-0  mb-12">
      {[
        "https://images.squarespace-cdn.com/content/v1/654fd0c994f690296cd62394/544a1596-1912-4b8a-8c2a-68f3b65b0a05/Alice.jpg?format=1000w",
        "https://images.squarespace-cdn.com/content/v1/654fd0c994f690296cd62394/97d79d07-3fdc-47f1-929b-03294fb24155/Fatima+Msai+review+2.png?format=1000w",
        "https://images.squarespace-cdn.com/content/v1/654fd0c994f690296cd62394/3dc24276-ffda-40fc-8566-21750279147f/Ronaldo+MsAi+Review+.png?format=1000w",
        "https://images.squarespace-cdn.com/content/v1/654fd0c994f690296cd62394/d3d45d43-6c93-4451-a0d9-e756a5742563/Nosa+MsAi+Review.png?format=2500w"
      ].map((src, index) => (
        <div key={index} className="text-center mx-auto mb-8 ">
          <img src={src} alt={`Testimonial ${index + 1}`} className="xs:240px sm:480px md:768px lg:1024px xl:1280px 2xl:1536px 3xl:1720px xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 3xl:h-80" />
        </div>
      ))}
    </div>
    <StartButtonWhite />
    <ResponsiveSVG2 />
  </div>
    
  </>
);

export default Testimonials;
