import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { Open_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Testimonial = () => {
  return (
    <div className="bg-[#0A2640] md:pb-[95px] pb-[60px]  lg:pl-[90px] lg:pr-[100px] md:pl-[40px] md:pr-[40px] pl-6 pr-6">
      <div className="flex pt-[100px] items-center md:gap-[50px] gap-6 md:flex-row flex-col pb-[60px]">
        <h2
          className={`${manrope.className} lg:w-[760px] w-full md:text-5xl lg:text-5xl text-center md:text-left text-[36px] font-normal  lg:leading-[72px] md:leading-[72px]  pb-[72px] text-white`}
        >
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex gap-6">
          <div className="w-[72px] h-[72px] rounded-full border border-[#ffffff] bg-[#ffffff] flex items-center justify-center">
            {" "}
            <ArrowLeft className="w-9 h-[36px] text-[#0A2640]" />
          </div>
          <div className="w-[72px] h-[72px] rounded-full border border-[#ffffff] bg-[#ffffff] flex items-center justify-center">
            {" "}
            <ArrowRight className="w-9 h-[36px] text-[#0A2640]" />
          </div>
        </div>
      </div>
      <div className="flex lg:gap-[32px] md:gap-6 md:flex-row flex-col gap-8">
        <div className="bg-[#FFF] lg:p-10 p-10 md:p-6  md:w-[420px] h-[360px] w-full rounded-[12px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)]">
          <p
            className={`${openSans.className} lg:text-[24px] text-[24px] md:text-[16px] font-normal leading-[36px] text-[#000] pb-10`}
          >
            “Buyer buzz partner network disruptive non-disclosure agreement
            business”
          </p>
          <div className="flex gap-[24px]">
            <Image src="/images/albus.png" alt="user" width={58} height={58} />
            <div className="flex flex-col">
              <p
                className={`${openSans.className} lg:text-[16px] text-[16px] md:text-[12px] font-bold leading-[32px] text-[#0A2640]`}
              >
                Albus Dumbledore
              </p>
              <p
                className={`${openSans.className} lg:text-[14px] text-[14px] md:text-[10px] font-normal leading-[32px] text-[#0A2640]`}
              >
                Manager @ Howarts
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF] lg:p-10 p-10 md:p-6  md:w-[420px]  h-[400px] w-full rounded-[12px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)]">
          <p
            className={`${openSans.className} lg:text-[24px] text-[24px] md:text-[16px] font-normal leading-[36px] text-[#000] pb-10`}
          >
            “Learning curve infrastructure value proposition advisor strategy
            user experience hypotheses investor.”
          </p>
          <div className="flex gap-[24px]">
            <Image src="/images/snape.png" alt="user" width={58} height={58} />
            <div className="flex flex-col">
              <p
                className={`${openSans.className}lg:text-[16px] text-[16px] md:text-[12px] font-bold leading-[32px] text-[#0A2640]`}
              >
                Severus Snape
              </p>
              <p
                className={`${openSans.className} lg:text-[14px] text-[14px] md:text-[10px] font-normal leading-[32px] text-[#0A2640]`}
              >
                Manager @ Slytherin
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF] lg:p-10 p-10 md:p-6  md:w-[420px] h-[360px] w-full rounded-[12px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)]">
          <p
            className={`${openSans.className} lg:text-[24px] text-[24px] md:text-[16px] font-normal leading-[36px] text-[#000] pb-10`}
          >
            “Release facebook responsive web design business model canvas seed
            money monetization.”
          </p>
          <div className="flex gap-[24px]">
            <Image src="/images/harry.png" alt="user" width={58} height={58} />
            <div className="flex flex-col">
              <p
                className={`${openSans.className} lg:text-[16px] text-[16px] md:text-[12px] font-bold leading-[32px] text-[#0A2640]`}
              >
                Harry Potter
              </p>
              <p
                className={`${openSans.className} lg:text-[14px] text-[14px] md:text-[10px] font-normal leading-[32px] text-[#0A2640]`}
              >
                Team Leader @ Gryffindor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
