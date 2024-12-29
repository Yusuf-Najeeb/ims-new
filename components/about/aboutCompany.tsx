import Image from "next/image";
import Engineer from "../../public/engineer.jpg";
import { PenIcon } from "lucide-react";

export default function AboutIMS() {
  return (
    <section className="py-8 px-4 sm:px-8">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-x-8 gap-y-4">
        <div className="w-full sm:w-2/3">
          <h2 className="text-[#111827] text-center sm:text-left text-4xl font-bold">
            About IMS Electricals
          </h2>
          <p className="leading-normal my-4 text-[#4b5563]">
            At IMS Electricals, we take pride in delivering excellence in every
            connection, both electrical and relational. With over 15 years of
            experience in the electrical industry, our mission is to provide
            top-notch, reliable, and efficient electrical solutions for both
            commercial and residential projects. Our expertise spans electrical
            installations, solar system installations, sound system setups,
            security systems, and comprehensive electrical maintenance.
          </p>
          <p className="leading-normal my-4 text-[#4b5563]">
            Our team of certified electricians and technicians is dedicated to
            ensuring that every project we undertake is executed with the
            highest standards of safety and quality. We believe that excellence
            isn&apos;t just about the final product; it&apos;s about the entire
            process, from the initial consultation to the completion of the
            project and beyond.
          </p>

          <div>
            <h3 className="text-[#111827] text-center sm:text-left text-4xl font-bold">
              Mission
            </h3>
            <p className="leading-normal my-4 text-[#4b5563]">
              Our mission is to empower homes and businesses with innovative and
              sustainable energy solutions that meet the evolving needs of our
              clients. We are committed to continuous improvement, embracing the
              latest technological advancements, and delivering exceptional
              customer service.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[40vh] sm:h-full">
          <Image
            src={Engineer.src}
            alt="Engineer"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-[#F5F5F5] flex flex-col sm:flex-row justify-center items-center gap-8 py-8">
        <div className="w-full sm:w-1/4 text-center">
          <PenIcon className="mx-auto" />
          <h3>Free Estimation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            provident deleniti beatae labore id quis eligendi
          </p>
        </div>
        <div className="w-full sm:w-1/4 text-center">
          <PenIcon className="mx-auto" />
          <h3>Free Estimation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            provident deleniti beatae labore id quis eligendi
          </p>
        </div>
        <div className="w-full sm:w-1/4 text-center">
          <PenIcon className="mx-auto" />
          <h3>Free Estimation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            provident deleniti beatae labore id quis eligendi
          </p>
        </div>
      </div>
    </section>
  );
}
