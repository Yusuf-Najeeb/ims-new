"use client";
import Image from "next/image";
import Link from "next/link";
import MapImage from "../public/map.png";
import Logo from "../public/logo.png";
const Footer = () => {
  return (
    <div
      className={`bg-[#2D4AF0] h-[300px] py-4 text-center text-[#fff] relative flex items-center`}
    >
      <div className="w-full absolute inset-0 bg-[#F0A500]/10"></div>
      <Image
        src={MapImage.src}
        alt="Empty Map"
        width={500}
        height={500}
        className="absolute"
      />
      <div className="absolute z-40 px-8 w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-start text-left gap-y-4">
          <Image
            src={Logo.src}
            alt="IMS Company Logo"
            width={100}
            height={100}
          />
          <p>
            With over 15 years in the Electrical Industry, Our Services keeps
            getting better across the Nigeria and beyond
          </p>
          <p>We are located at Klen Plaza, Gwagwalada Abuja.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="flex flex-col gap-y-4 items-start ml-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p>
            With over 15 years in the Electrical Industry, Our Services keeps
            getting better across the Nigeria and beyond
          </p>
          <p>We are located at Klen Plaza, Gwagwalada Abuja.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
