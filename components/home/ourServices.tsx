import Image from "next/image";
import Engineer from "../../public/engineer.jpg";

export default function OurServices() {
  return (
    <section className="flex flex-col items-center gap-x-8 gap-y-8 py-8 px-4 sm:px-8">
      <div className="my-4">
        <h2 className="text-[#2D4AF0] text-2xl md:text-4xl font-bold leading-normal text-center">
          Our services
        </h2>
        <p className="text-xl text-[#333] text-center sm:leading-normal">
          We provide a wide range of electrical engineering services tailored to
          meet the needs of various industries.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-full md:w-[40%]">
          <figure className="w-full h-full relative">
            <Image
              src={Engineer.src}
              alt=""
              width={100}
              height={100}
              className="w-full h-full block rounded-lg"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-[#2D4AF0]/50 hover:bg-[#0ABFBC]/50 p-2 rounded-b-md transition">
              <h3 className="text-center font-semibold text-white">
                Residential Electrical Designs
              </h3>
            </figcaption>
          </figure>
        </div>

        <div className="w-full md:w-[50%]">
          <ul className="flex flex-col gap-y-4">
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Power Distribution:
              </span>{" "}
              Our residential electrical designs ensure that your home receives
              a reliable power supply. We design electrical panels and circuits
              to meet the specific needs of your household.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">Lighting:</span> We
              create lighting plans that provide adequate illumination for every
              room, enhancing both functionality and aesthetics.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">Safety:</span>{" "}
              Safety is our top priority. Our designs include proper grounding,
              bonding, and circuit protection to prevent electrical hazards.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Energy Efficiency:
              </span>{" "}
              We incorporate energy-efficient lighting and appliances to help
              you save on energy bills and reduce your environmental footprint.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Smart Home Integration:
              </span>{" "}
              We offer smart home solutions, including automated lighting,
              security systems, and home automation, to make your home more
              convenient and secure. Custom Solutions: Every home is unique, and
              we tailor our electrical designs to meet your specific
              requirements and preferences.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4">
        <div className="w-full md:w-[40%]">
          <figure className="w-full h-full relative">
            <Image
              src={Engineer.src}
              alt=""
              width={100}
              height={100}
              className="w-full h-full block rounded-lg"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-[#2D4AF0]/50 hover:bg-[#0ABFBC]/50 p-2 rounded-b-md transition">
              <h3 className="text-center font-semibold text-white">
                Commercial Electrical Designs
              </h3>
            </figcaption>
          </figure>
        </div>

        <div className="w-full md:w-[50%]">
          <ul className="flex flex-col gap-y-4">
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Power Distribution Systems:
              </span>{" "}
              Our commercial electrical designs include comprehensive power
              distribution systems, ensuring that your building receives a
              reliable and efficient power supply. We incorporate electrical
              panels, switchgear, and transformers to manage the flow of
              electricity and convert voltage levels as needed.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Lighting Systems:
              </span>{" "}
              We We strategically place lighting fixtures to ensure optimal
              illumination throughout your commercial space. Our designs also
              include backup emergency lighting systems for added safety1.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Safety Measures:
              </span>{" "}
              Proper grounding and bonding are essential to prevent fire hazards
              and electrical shocks. Our designs include safety measures to
              prevent overloaded circuits and arc faults1.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Energy-Efficiency Measures:
              </span>{" "}
              We incorporate energy-efficient devices, fixtures, and equipment
              to reduce energy waste and lower operational costs.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Communication Systems:
              </span>{" "}
              Our designs include properly installed communication systems such
              as telephone systems, WiFi, broadband internet, and
              teleconferencing facilities.
            </li>
            <li>
              <span className="font-semibold text-[#0ABFBC]">
                Security Systems:
              </span>{" "}
              We integrate security systems, burglar alarms, and other important
              security measures to ensure the safety of your commercial space.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
