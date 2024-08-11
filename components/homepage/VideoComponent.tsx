'use client';
import StartButton from './StartButton';
import ResponsiveSVG from './wave';

const VideoComponent = () => {
  return (
    <>
      <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] xl:text-[3rem] 2xl:text-[3.2rem] mt-8 sm:mt-10 md:mt-12 mb-0 font-bold text-center">
        MedicalStudent.ai
      </p>
      <div className="w-full h-0 pb-[56.25%] relative overflow-hidden">
        <div className="xs:w-[256px] xs:h-[160px] sm:w-[384px] sm:h-[240px] md:w-[614px] md:h-[383px] lg:w-[819px] lg:h-[511px] xl:w-[1024px] xl:h-[640px] 2xl:w-[1228px] 2xl:h-[767px] 3xl:w-[1376px] 3xl:h-[860px] mx-auto mb-0">
          <iframe
            src="https://drive.google.com/file/d/1tyrbW-k2tuiN4FqzMmVLX-mlrmU0XRuk/preview"
            className="w-full h-full"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
      <StartButton />
      <ResponsiveSVG />
    </>
  );
};

export default VideoComponent;
