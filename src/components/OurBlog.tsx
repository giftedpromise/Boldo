import React from "react";
import { Open_Sans, Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const OurBlog = () => {
  return (
    <section className="lg:pt-[160px] md:pt-[80px] pt-[60px]">
      <div>
        <h2
          className={`${openSans.className} text-center text-[20px] font-normal text-[#777] leading-[32px] pb-3`}
        >
          Our Blog
        </h2>
        <p
          className={`${manrope.className} text-[48px] text-center font-normal text-[#000] leading-[72px] pb-[77px]`}
        >
          Value proposition accelerator product <br />
          management venture
        </p>
      </div>
      <div className="flex lg:px-[150px] lg:gap-[50px] md:gap-8 gap-[50px]  px:md-[40px] px-6 md:flex-row flex-col ">
        <div>
          <Image
            src="/images/blogImg1.png"
            alt="rectangle"
            width={300}
            height={209}
            className="md:w-[200px] lg:w-[300px] w-full"
          />
          <div className="flex pt-6 gap-3 items-center ">
            <p
              className={`${openSans.className}  text-[16px] font-bold text-[#0A2640] leading-[28px]`}
            >
              Category
            </p>
            <p
              className={`${openSans.className}  text-[16px] font-normal text-[#777] leading-[28px]`}
            >
              November 22, 2021
            </p>
          </div>
          <p
            className={`${openSans.className}  text-[20px] w-[300px] lg:block md:hidden hidden  font-normal text-[#000] leading-[32px]`}
          >
            Pitch termsheet backing <br /> validation focus release.
          </p>
          <p
            className={`${openSans.className}  text-[20px] w-[280px] md:block lg:hidden hidden  font-normal text-[#000] leading-[32px]`}
          >
            Pitch termsheet backing validation focus release.
          </p>
          <p
            className={`${openSans.className}  text-[20px] w-full md:hidden lg:hidden block  font-normal text-[#000] leading-[32px]`}
          >
            Pitch termsheet backing validation focus release.
          </p>
          <div className="flex gap-3 items-center pt-16 lg:pt-16 md:pt-[100px]">
            <Image
              src="/images/roundedImg1.png"
              alt="rectangle"
              width={32}
              height={32}
            />
            <p
              className={`${openSans.className}  text-[16px] font-normal text-[#000] leading-[28px]`}
            >
              Chandler Bing
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/images/blogImg2.png"
            alt="rectangle"
            width={300}
            height={209}
            className="md:w-[200px] lg:w-[300px] w-full"
          />
          <div className="flex pt-6 gap-3 items-center ">
            <p
              className={`${openSans.className}  text-[16px] font-bold text-[#0A2640] leading-[28px]`}
            >
              Category
            </p>
            <p
              className={`${openSans.className}  text-[16px] font-normal text-[#777] leading-[28px]`}
            >
              November 22, 2021
            </p>
          </div>
          <p
            className={`${openSans.className}  text-[20px] w-[300px] lg:block md:hidden hidden  font-normal text-[#000] leading-[32px]`}
          >
            Seed round direct mailing non- <br />
            disclosure agreement graphical <br />
            user interface rockstar.
          </p>

          <p
            className={`${openSans.className}  text-[20px] w-[280px] md:block lg:hidden hidden  font-normal text-[#000] leading-[32px]`}
          >
            Seed round direct mailing non- disclosure agreement graphical user
            interface rockstar.
          </p>
          <p
            className={`${openSans.className}  text-[20px] w-full md:hidden lg:hidden block  font-normal text-[#000] leading-[32px]`}
          >
            Seed round direct mailing non- disclosure agreement graphical user
            interface rockstar.
          </p>
          <div className="flex gap-3 items-center pt-10">
            <Image
              src="/images/roundedImg2.png"
              alt="rectangle"
              width={32}
              height={32}
            />
            <p
              className={`${openSans.className}  text-[16px] font-normal text-[#000] leading-[28px]`}
            >
              Rachel Green
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/images/blogImg3.png"
            alt="rectangle"
            width={300}
            height={209}
            className="md:w-[200px] lg:w-[300px] w-full"
          />
          <div className="flex pt-6 gap-3 items-center ">
            <p
              className={`${openSans.className}  text-[16px] font-bold text-[#0A2640] leading-[28px]`}
            >
              Category
            </p>
            <p
              className={`${openSans.className}  text-[16px] font-normal text-[#777] leading-[28px]`}
            >
              November 22, 2021
            </p>
          </div>
          <p
            className={`${openSans.className}  text-[20px] w-[300px] lg:block md:hidden hidden  font-normal text-[#000] leading-[32px]`}
          >
            Beta prototype sales iPad gen-z <br /> marketing network effects
            value <br />
            proposition
          </p>
          <p
            className={`${openSans.className}  text-[20px]  md:block lg:hidden hidden  font-normal text-[#000] leading-[32px]`}
          >
            Beta prototype sales iPad gen-z marketing network effects value
            proposition
          </p>
          <p
            className={`${openSans.className}  text-[20px] w-full md:hidden lg:hidden block  font-normal text-[#000] leading-[32px]`}
          >
            Beta prototype sales iPad gen-z marketing network effects value
            proposition
          </p>
          <div className="flex gap-3 items-center lg:pt-10 pt-10 md:pt-[70px]">
            <Image
              src="/images/roundedImg3.png"
              alt="rectangle"
              width={32}
              height={32}
            />
            <p
              className={`${openSans.className}  text-[16px] font-normal text-[#000] leading-[28px]`}
            >
              Monica Geller
            </p>
          </div>
        </div>
      </div>
      <div className="text-center lg:pt-[84px] lg:pb-[124px] md:pt-[60px] md:pb-[60px] pt-[60px] pb-[60px]">
        <button className="inline-flex h-[60px] px-[56px] py-[16px] justify-center items-center rounded-[56px] border-2 border-[#0A2640] bg-white text-[#0A2640] font-open-sans text-[20px] font-bold leading-[28px] gap-[8px] flex-shrink-0 hover:bg-[#0A2640] hover:border-[#0A2640] hover:text-white transition duration-300">
          Load more
        </button>
      </div>
    </section>
  );
};

export default OurBlog;
