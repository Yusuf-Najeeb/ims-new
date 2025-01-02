import Image from "next/image";
import Engineer from "../../public/engineer.jpg";
import {
  NotepadText,
  CalendarClock,
  Wallet,
  MessagesSquare,
} from "lucide-react";

export default function AboutIMS() {
  return (
    <section className="py-8">
      <div className="flex flex-col-reverse sm:flex-row md:items-center gap-x-8 gap-y-4  px-4 sm:px-8">
        <div className="w-full md:w-3/5">
          <h2 className="text-[#111827] text-center sm:text-left text-4xl font-bold">
            Our Culture
          </h2>
          <p className="leading-normal my-4 text-[#4b5563] px-2">
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
        <div className="w-full sm:w-2/5 h-[40vh] md:h-full about_img">
          <Image
            src={Engineer.src}
            alt="Engineer"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2 gap-8 py-8 mt-4">
        <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
          <NotepadText className="mx-auto w-16 h-16 text-[#F0A500]" />
          <h3 className="text-[#111827] text-xl font-semibold">
            Free Estimation
          </h3>
          <p className="text-[#4b5563] px-2">
            Our team is ready to assess your needs and provide you with an
            accurate and no-obligation quote. Take the first step towards a
            reliable and efficient power solution by contacting us today.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
          <CalendarClock className="mx-auto w-16 h-16 text-[#F0A500]" />
          <h3 className="text-[#111827] text-xl font-semibold">
            24/7 Available
          </h3>
          <p className="text-[#4b5563] px-2">
            Whether it&apos;s a sudden power outage, a faulty security system,
            or an urgent maintenance requirement, our team is just a call away,
            ready to provide prompt and efficient solutions anytime.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
          <MessagesSquare className="mx-auto w-16 h-16 text-[#F0A500]" />
          <h3 className="text-[#111827] text-xl font-semibold">Consultation</h3>
          <p className="text-[#4b5563] px-2">
            We provide exceptional electrical services that meet your unique
            needs. Our expert consultation services are designed to provide you
            with the best solutions for your electrical needs.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
          <Wallet className="mx-auto w-16 h-16 text-[#F0A500]" />
          <h3 className="text-[#111827] text-xl font-semibold">
            Affordable Prices
          </h3>
          <p className="text-[#4b5563] px-2">
            We believe that top-quality electrical services should be accessible
            to everyone. We offer competitive and affordable pricing for all our
            services without compromising on quality or safety.
          </p>
        </div>
      </div>
    </section>
  );
}
