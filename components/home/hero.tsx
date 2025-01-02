import { useState } from "react";
import { Button } from "@/components/ui/button";
import RequestModal from "@/components/RequestModal";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section
      className="hero_image w-full h-[90vh] sm:h-[80vh] lg:h-screen relative flex flex-col justify-center px-4 sm:px-8 gap-8 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/backgd.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#F0A500]/10"></div>
      <div className="text-[#F5F5F5] relative z-30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:w-2/3 md:leading-normal">
          Empowering Innovation in Electrical Engineering...
        </h1>
        <p className="my-4 lg:w-2/3 text-xl sm:text-2xl sm:leading-normal">
          Elevate your projects with our visionary electrical engineering
          expertise. From ingenious solutions to unwavering problem-solving, we
          drive innovative solution with qualitative services.
        </p>
        <Button
          variant="default"
          size="lg"
          onClick={handleOpen}
          className="bg-[#F0A500] hover:bg-[#F0A500]/70 cursor-pointer text-[#000]"
        >
          Request Service
        </Button>
      </div>

      <RequestModal open={isOpen} onClose={handleClose} />
    </section>
  );
}
