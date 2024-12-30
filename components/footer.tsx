"use client";
import Image from "next/image";
import Link from "next/link";
import MapImage from "../public/map.png";
import Logo from "../public/logoWhite.svg";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-[#fff] bg-[#2D4AF0]">
      <div className="w-full relative flex flex-col md:flex-row items-center">
        <div className="w-full absolute inset-0 bg-[#F0A500]/30"></div>
        <Image
          src={MapImage.src}
          alt="Empty Map"
          width={500}
          height={500}
          className="absolute top-10 sm:top-0"
        />

        <div className="relative z-20 px-4 sm:px-8 w-full flex flex-col md:flex-row md:justify-between md:items-center py-8 space-y-12 sm:space-y-0">
          <div className="flex flex-col items-start justify-start gap-y-4 w-full md:w-[40%]">
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
            <p>
              Mail us at:{" "}
              <Link href="mailto:G8aY3@example.com">G8aY3@example.com</Link>
            </p>
            <p>Call us at: +234 234 234 234</p>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Follow Us on Social Media.
              </h4>

              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <FaXTwitter className="transition w-5 h-5 text-[#F5F5F5] hover:text-[#F0A500]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <FaFacebook className="transition w-5 h-5 text-[#F5F5F5] hover:text-[#F0A500]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <AiFillInstagram className="transition w-5 h-5 text-[#F5F5F5] hover:text-[#F0A500]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/ims_electrical"
                    target="_blank"
                  >
                    <IoLogoTiktok className="transition w-5 h-5 text-[#F5F5F5] hover:text-[#F0A500]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Complaint Box */}
          <div className="md:w-[45%] space-y-2">
            <h4 className="font-bold text-xl">
              Have a Complaint or Suggestion?
            </h4>
            <p className="">We are happy to hear from you</p>
            <form
              className="text-[#111827] flex flex-col gap-y-4"
              method="POST"
            >
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2 text-[#F5F5F5]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2 text-[#F5F5F5]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2 text-[#F5F5F5]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  id="message"
                  name="message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                className="w-full bg-[#F0A500] text-[#111827] px-4 py-2 rounded-md hover:bg-[#F0A500]/70"
                type="submit"
              >
                Send Message
              </button>
              {/* </form>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <p className="relative bottom-0 w-full mx-auto mt-4 text-center">
        All Right Reserved &copy; IMS Electricals 2025
      </p>
    </footer>
  );
};

export default Footer;
