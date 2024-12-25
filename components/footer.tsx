"use client";
import Image from "next/image";
import Link from "next/link";
import MapImage from "../public/map.png";
import Logo from "../public/logo.png";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter, Music2 } from "lucide-react";
const Footer = () => {
  return (
    <footer
      className={`bg-[#2D4AF0] h-[500px] py-4 text-[#fff] relative flex items-center`}
    >
      <div className="w-full absolute inset-0 bg-[#F0A500]/10"></div>
      <Image
        src={MapImage.src}
        alt="Empty Map"
        width={700}
        height={700}
        className="absolute object-cover"
      />

      <div className="absolute z-40 px-8 w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-start gap-y-4 w-[40%]">
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

          <div>
            <h4>Socials:</h4>
            <div>
              <Button variant="ghost" size="icon">
                <Link href="https://twitter.com/ims_electrical" target="_blank">
                  <Twitter />
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
                <Link href="https://twitter.com/ims_electrical" target="_blank">
                  <Facebook />
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
                <Link href="https://twitter.com/ims_electrical" target="_blank">
                  <Instagram />
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
                <Link href="https://twitter.com/ims_electrical" target="_blank">
                  <Music2 />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-[33%] space-y-2">
          <h4 className="font-bold text-xl">Have a complaint or suggestion?</h4>
          <p className="text-sm">We are happy to hear from you</p>
          <form className="text-[#000] flex flex-col gap-y-4" method="POST">
            <div className="flex flex-col gap-y-2 items-start">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="focus:ring-0 p-2 min-w-[400px] max-w-[400px]"
              />
            </div>
            <div className="flex flex-col gap-y-2 items-start">
              <label className="text-white" htmlFor="msg">
                Message
              </label>
              <textarea
                name="msg"
                id="msg"
                minLength={300}
                maxLength={2000}
                placeholder="Enter your message..."
                className="max-h-[200px] min-h-[200px] min-w-[400px] max-w-[400px] p-2"
              ></textarea>
            </div>

            <button
              disabled
              className="bg-[#F0A500] hover:bg-[#F0A500]/80 rounded-md px-4 py-2 text-[#000] w-full sm:w-1/3"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
