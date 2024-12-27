import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="w-full h-[80vh] lg:h-screen relative flex flex-col justify-center px-4 sm:px-8 gap-8 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/backgd.png');",
      }}
    >
      <div className="absolute inset-0 bg-[#F0A500]/10"></div>
      <div className="text-[#F5F5F5] relative z-30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:w-2/3 leading-normal">
          Experience the future of engineering excellence
        </h1>
        <p className="my-4 lg:w-2/3 text-xl sm:text-2xl leading-normal">
          Elevate your projects with our visionary electrical engineering
          expertise. From ingenious solutions to unwavering problem-solving, we
          drive innovative solution with qualitative services.
        </p>
        <Link href="/contact">
          <Button
            variant="default"
            size="lg"
            className="bg-[#F0A500] hover:bg-[#F0A500]/70 cursor-pointer text-[#000]"
          >
            Request Service
          </Button>
        </Link>
      </div>
    </section>
  );
}
