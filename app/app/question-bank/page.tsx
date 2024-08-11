import BoxReveal from "@/components/magicui/box-reveal";

import { Button } from "@/components/ui/button";

export default async function QuestionBankPage() {
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Question Bank <span className="text-[#000000]"></span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Coming soon{" "}
          {/* <span className="text-[#5046e6]"></span> */}
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            USMLE Practice questions.<br />
            Written and Reviewed by 
            <span className="font-semibold"> Doctors </span>
            and
            <span className="font-semibold"> Lecturers</span>
            . <br />            
          </p>
        </div>
      </BoxReveal>
{/* 
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#000000]">Sign Up to the Waiting list!</Button>
      </BoxReveal> */}
    </div>
  );
}
