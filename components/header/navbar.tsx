"use client";
// * React Imports
import { useState } from "react";

// *Third-party Imports
import { motion, AnimatePresence } from "framer-motion";
import { MapPinCheck, PhoneCall, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
  exit: { x: "100%" },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
  exit: { opacity: 0 },
};
const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const path = usePathname();
  return (
    <header className="">
      <div className="hidden md:flex items-center justify-between py-4 sm:px-8">
        <p>logo</p>
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <MapPinCheck className="w-8 h-8 text-[#F0A500]" />
            <p>
              <span className="text-slate-500">Address:</span> <br />
              Klen Plaza Gwagwalada, Abuja.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-8 h-8 text-[#F0A500]" />
            <p>
              <span className="text-slate-500">Call Us:</span> <br />
              +234 234 234 234
            </p>
          </div>
          <Button className="bg-[#F0A500] hover:bg-[#F0A500]/70">
            Request Service
          </Button>
        </div>
      </div>
      <nav className="hidden md:flex bg-[#2D4AF0]">
        <ul className="flex items-center gap-8 py-4 px-4 sm:px-8">
          {links.map((link) => {
            let currentPath;
            if (path === "/") {
              currentPath = link.href === "/";
            } else {
              currentPath = link.href === path;
            }
            return (
              <li
                key={link.title}
                className={`${
                  currentPath && "bg-[#F0A500] font-semibold"
                } block p-1 px-2 sm:px-3 py-2 hover:bg-[#F0A500]/70 rounded-md`}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div>
        <div className="flex md:hidden">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-10 bg-background/50 backdrop-blur-sm"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
                  <X className="w-8 h-8 text-[#2D4AF0]" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(true)}
                >
                  <Menu className="w-50 h-50 text-[#2D4AF0]" size={30} />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isOpen && (
              <motion.nav
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "spring", stiffness: 80 }}
                className="fixed right-0 w-[85%] sm:w-[50%] h-screen bg-background/80 z-20 flex flex-col gap-y-8 drop-shadow-lg rounded-b-lg"
              >
                <nav className="md:hidden flex">
                  <ul className="flex flex-col gap-8 py-4 px-4">
                    {links.map((link) => {
                      let currentPath;
                      if (path === "/") {
                        currentPath = link.href === "/";
                      } else {
                        currentPath = link.href === path;
                      }
                      return (
                        <li
                          key={link.title}
                          className={`${
                            currentPath && "bg-[#F0A500] font-semibold"
                          } block p-1 px-4 py-2 hover:bg-[#F0A500]/70 rounded-md`}
                        >
                          <Link href={link.href}>{link.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
