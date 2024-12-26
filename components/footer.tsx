"use client";
import Image from "next/image";
import Link from "next/link";
import MapImage from "../public/map.png";
import Logo from "../public/logoWhite.svg";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter, Music2 } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full py-4 text-[#fff] bg-[#2D4AF0]">
      <div className="w-full relative flex flex-col md:flex-row items-center">
        <div className="w-full absolute inset-0 bg-[#F0A500]/10"></div>
        <Image
          src={MapImage.src}
          alt="Empty Map"
          width={300}
          height={300}
          className="absolute w-full h-full"
        />

        <div className="relative z-20 px-4 sm:px-8 w-full flex flex-col md:flex-row md:justify-between md:items-center py-8">
          <div className="flex flex-col items-start justify-start gap-y-4 md:w-[40%]">
            <Image
              src={Logo.src}
              alt="IMS Company Logo"
              width={200}
              height={200}
            />
            <p>
              With over 15 years in the Electrical Industry, Our Services keeps
              getting better across Nigeria and beyond.
            </p>
            <p>We are located at Klen Plaza, Gwagwalada Abuja.</p>

            <div>
              <h4>Socials:</h4>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <Twitter />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <Facebook />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <Instagram />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <Music2 />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:w-[33%] space-y-2">
            <h4 className="font-bold text-xl">
              Have a complaint or suggestion?
            </h4>
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
                  className="focus:ring-0 p-2 min-w-[100%] max-w-[400px]"
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
                  className="max-h-[200px] min-h-[200px] min-w-[100%] max-w-[400px] p-2"
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
      </div>
      <p className="relative bottom-0 w-full mx-auto mt-4 text-center">
        All Right Reserved &copy; 2025
      </p>
    </footer>
  );
};

export default Footer;
