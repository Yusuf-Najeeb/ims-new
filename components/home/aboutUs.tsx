import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import Engineer from "../../public/backgd.png";
export default function AboutUs() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center gap-x-8 gap-y-4 py-8 px-4 sm:px-8">
      <div className="w-full sm:w-2/3">
        <h2 className="text-[#111827] text-4xl font-bold leading-normal">
          We are Leading Electrical Solutions
        </h2>
        <p className="leading-normal my-4 text-[#4b5563]">
          At IMS Electricals, we combine industry expertise with
          forward-thinking energy solutions to create reliable and sustainable
          electrical systems. Our team of certified engineers is committed to
          providing top-notch services in electrical design, renewable energy
          integration, smart-home integration and system maintenance. Whether
          it&apos;s residential, commercial, or industrial, we have the skills
          to handle any electrical challenge.
        </p>
        <p className="leading-normal my-4 text-[#4b5563]">
          With a keen focus on sustainability and energy efficiency, We are
          passionate about integrating renewable energy solutions into everyday
          life. Whether it&apos;s a large-scale industrial installation or home
          solar power setup, we apply our expertise to deliver optimal
          solutions.
        </p>
        <Button className="bg-[#F0A500] hover:bg-[#F0A500]/70 text-[#000] px-4">
          <Link href="/about">Read More</Link>
        </Button>
      </div>
      <div className="w-full sm:w-1/3 h-[40vh] sm:h-full">
        <Image
          src={Engineer.src}
          alt="Temporary"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </section>
  );
}
