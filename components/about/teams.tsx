import Image from "next/image";
import Engineer from "../../public/engineer.jpg";
export default function Teams() {
  return (
    <section className="py-8 px-4 sm:px-8">
      <h2 className="text-[#111827] text-4xl font-bold mb-2 text-center">
        Our Team
      </h2>
      <p className="text-center text-[#4b5563]">
        Meet the Experts Behind Our Success
      </p>
      <div>
        <figure className="relative flex flex-col gap-2 rounded">
          <Image
            src={Engineer.src}
            alt="Engineer"
            width={1000}
            height={1000}
            className="object-cover w-[200px] h-[200px]"
          />
          <figcaption className="absolute -bottom-2 bg-[#F0A500] right-0 px-2 w-[150px] rounded-md text-center">
            <h3 className="text-[#111827] font-semibold">John Doe</h3>
          </figcaption>
          <p className="text-[#4b5563]">Specialty: Electrical Installer</p>
          <p className="text-[#4b5563]">Contact: +234 234 234 234</p>
        </figure>
      </div>
    </section>
  );
}
