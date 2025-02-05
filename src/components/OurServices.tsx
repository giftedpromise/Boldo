import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Open_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const OurServices = () => {
  return (
    <section className="bg-[#0A2640]">
      <h1
        className={`${openSans.className} text-[20px] font-normal leading-[32px] text-white text-center pt-8`}
      >
        Our services
      </h1>
      <p
        className={`${manrope.className} lg:px-[187px] px-6 md:text-5xl lg:text-5xl text-[36px] font-normal text-center lg:leading-[72px] md:leading-[72px]  pb-[72px] text-white`}
      >
        Handshake infographic mass market crowdfunding iteration.
      </p>
      <div className="flex pb-[96px] lg:pl-[156px] lg:pr-[150px] md:pl-[40px] md:pr-[40px] pl-8 pr-6 gap-[99px] flex-col md:flex-row justify-center">
        <div>
          <div>
            <Image
              src="/images/Rectangle1.png"
              alt="rectangle"
              width={300}
              height={354}
            />
            <p
              className={`${openSans.className} text-[24px] font-normal leading-[36px] text-white pt-6 pb-7`}
            >
              Cool feature title
            </p>
            <div className="flex items-center gap-3">
              <p
                className={`${openSans.className} text-[20px] font-bold leading-[36px] text-white  pb-2`}
              >
                Explore page
              </p>
              <ArrowRight className="w-6 h-[26px] text-white" />
            </div>
            <Image
              src="/images/line.png"
              alt="rectangle"
              width={164}
              height={1}
            />
          </div>
        </div>

        <div>
          <div>
            <Image
              src="/images/Rectangle2.png"
              alt="rectangle"
              width={300}
              height={354}
            />
            <p
              className={`${openSans.className} text-[24px] font-normal leading-[36px] text-white pt-6 pb-7`}
            >
              Cool feature title
            </p>
            <div className="flex items-center gap-3">
              <p
                className={`${openSans.className} text-[20px] font-bold leading-[36px] text-white  pb-2`}
              >
                Explore page
              </p>
              <ArrowRight className="w-6 h-[26px] text-white" />
            </div>
            <Image
              src="/images/line.png"
              alt="rectangle"
              width={164}
              height={1}
            />
          </div>
        </div>

        <div>
          <div>
            <Image
              src="/images/Rectangle3.png"
              alt="rectangle"
              width={300}
              height={354}
            />
            <p
              className={`${openSans.className} text-[24px] font-normal leading-[36px] text-white pt-6 pb-7`}
            >
              Cool feature title
            </p>
            <div className="flex items-center gap-3">
              <p
                className={`${openSans.className} text-[20px] font-bold leading-[36px] text-white  pb-2`}
              >
                Explore page
              </p>
              <ArrowRight className="w-6 h-[26px] text-white" />
            </div>
            <Image
              src="/images/line.png"
              alt="rectangle"
              width={164}
              height={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
