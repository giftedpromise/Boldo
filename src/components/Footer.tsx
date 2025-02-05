import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Footer = () => {
  return (
    <section className="lg:pt-[184px] md:pt-[80px] pb-[110px] pt-[60px] lg:px-[100px] px-6 md:px-[40px]">
      <div className="flex flex-col-reverse md:flex-row  justify-between">
        <div className="flex flex-col">
          {" "}
          <Image src="/images/Logo.png" alt="Logo" width={162} height={42} />
          <p
            className={`${openSans.className} pt-10 md:w-[300px] text-[16px] font-normal text-[#777] leading-[28px]`}
          >
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p
            className={`${openSans.className} pt-[64px] lg:w-[300px] text-[16px] font-normal text-[#777] leading-[28px]`}
          >
            All rights reserved.
          </p>
        </div>
        <div className="flex flex-col">
          <h2
            className={`${openSans.className} pb-8  text-[20px] font-bold text-[#000] leading-[32px]`}
          >
            Landings
          </h2>
          <ul>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Home
            </li>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Products
            </li>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Services
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h2
            className={`${openSans.className} pb-8  text-[20px] font-bold text-[#000] leading-[32px]`}
          >
            Company
          </h2>
          <ul>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Home
            </li>
            <div className="flex justify-between items-center pb-8 gp-0 md:gap-2">
              <li
                className={`${openSans.className} text-[20px] font-normal text-[#777] leading-[32px]`}
              >
                Careers
              </li>
              <button className="inline-flex items-center gap-[10px] px-[14px] py-[1px] rounded-[120px] bg-[#65E4A3] text-[#0A2640] font-open-sans text-[13px] font-bold leading-[28px]">
                Hiring!
              </button>
            </div>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Services
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2
            className={`${openSans.className} pb-8  text-[20px] font-bold text-[#000] leading-[32px]`}
          >
            Resources
          </h2>
          <ul>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Blog
            </li>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Products
            </li>
            <li
              className={`${openSans.className} pb-8  text-[20px] font-normal text-[#777] leading-[32px]`}
            >
              Services
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
