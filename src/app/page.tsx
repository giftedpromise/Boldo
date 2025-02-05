import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import OurBlog from "@/components/OurBlog";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { Open_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div>
        <OurServices />
      </div>
      <section className="lg:pl-[156px] lg:pr-[107px] pt-[120px] pb-[150px] md:pl-[40px] md:pr-[40px] pl-6 pr-6 flex md:flex-row flex-col lg:gap-[120px] md:gap-[60px] gap-[80px]">
        <Image
          src="/images/ourWork.png"
          alt="ourWork"
          width={494}
          height={646}
        />
        <div className="flex flex-col md:w-[600px] w-full">
          <h2
            className={`${manrope.className} text-4xl font-normal text-[#000] leading-[56px] pb-10`}
          >
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="flex gap-[33px] pb-6 items-center">
            {" "}
            <div className="w-6 h-6 rounded-full border border-[#0A2640] bg-[#0A2640] flex items-center justify-center">
              <Check color="white" size={16} />
            </div>
            <h2
              className={`${openSans.className} text-[20px] font-normal text-[#000] leading-[32px]`}
            >
              We connect our customers with the best.
            </h2>
          </div>

          <div className="flex gap-[33px] pb-6 items-center">
            {" "}
            <div className="w-6 h-6 rounded-full border border-[#0A2640] bg-[#0A2640] flex items-center justify-center">
              <Check color="white" size={16} />
            </div>
            <h2
              className={`${openSans.className} text-[20px] font-normal text-[#000] leading-[32px]`}
            >
              Advisor success customer launch party.
            </h2>
          </div>

          <div className="flex gap-[33px] pb-[56px] items-center">
            {" "}
            <div className="w-6 h-6 rounded-full border border-[#0A2640] bg-[#0A2640] flex items-center justify-center">
              <Check color="white" size={16} />
            </div>
            <h2
              className={`${openSans.className} text-[20px] font-normal text-[#000] leading-[32px]`}
            >
              Business-to-consumer long tail.
            </h2>
          </div>
          <button className="flex items-center w-[210px] h-[60px] justify-center whitespace-nowrap gap-2 px-[56px] py-[16px] rounded-[56px] border-2 border-[#0A2640] text-white font-open-sans text-[20px] font-bold leading-[28px] bg-[#0A2640]">
            Start now
          </button>
        </div>
      </section>
      <section>
        <div className="flex justify-center md:gap-[156px] gap-[80px] px-6 md:px-[40px] lg:px-[100px] items-center md:flex-row flex-col">
          <div className="md:w-[540px] w-full">
            <h2
              className={`${manrope.className} text-4xl font-normal text-[#000] leading-[56px] pb-[64px]`}
            >
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <div className="bg-[#0A2640] rounded-[4px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)] p-4 flex items-center gap-3 mb-6">
              <Image
                src="/images/star.png"
                alt="ourWork"
                width={24}
                height={24}
              />
              <p
                className={`${openSans.className} text-[16px] font-semibold text-[#FFF] leading-[28px]`}
              >
                We connect our customers with the best.
              </p>
            </div>
            <div className="bg-[#FFF] rounded-[4px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)] p-4 flex items-center gap-3 mb-6">
              <Image
                src="/images/star2.png"
                alt="ourWork"
                width={24}
                height={24}
              />
              <p
                className={`${openSans.className} text-[16px] font-semibold text-[#000] leading-[28px]`}
              >
                Advisor success customer launch party.
              </p>
            </div>
            <div className="bg-[#FFF] rounded-[4px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)] p-4 flex items-center gap-3">
              <Image
                src="/images/sun.png"
                alt="ourWork"
                width={24}
                height={24}
              />
              <p
                className={`${openSans.className} text-[16px] font-semibold text-[#000] leading-[28px]`}
              >
                Business-to-consumer long tail.
              </p>
            </div>
          </div>
          <Image
            src="/images/chart.png"
            alt="ourWork"
            width={444}
            height={728}
          />
        </div>
      </section>
      <section>
        <Testimonial />
      </section>
      <section className="pt-[120px] lg:px-[120px] md:px-[40px] px-6">
        <Image
          src="/images/connection.png"
          alt="ourWork"
          width={1100}
          height={403}
          objectFit="contain"
        />
        <div className="flex md:flex-row flex-col pt-[56px] gap-[70px] ">
          <h2
            className={`${manrope.className} text-4xl md:w-[500px] w-full  font-normal text-[#000] leading-[56px]`}
          >
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div>
            <div className="flex gap-9 pb-4">
              <p
                className={`${openSans.className} text-[20px] font-normal text-[#000] leading-[32px]`}
              >
                We connect our customers with the best?
              </p>
              <div className="flex items-center justify-center bg-black w-[28px] h-[28px] rounded-full">
                <ChevronDown size={24} color="white" />
              </div>
            </div>
            <Image
              src="/images/line1.png"
              alt="ourWork"
              width={480}
              height={1}
            />
            <div className="flex gap-9 pb-4 pt-8">
              <p
                className={`${openSans.className} text-[20px] font-normal text-[#000] leading-[32px]`}
              >
                Android research & development rockstar?{" "}
              </p>
              <div className="flex items-center justify-center bg-black w-[28px] h-[28px] rounded-full">
                <ChevronDown size={24} color="white" />
              </div>
            </div>
            <Image
              src="/images/line1.png"
              alt="ourWork"
              width={480}
              height={1}
            />
          </div>
        </div>
      </section>
      <section>
        <OurBlog />
      </section>
    </main>
  );
}
