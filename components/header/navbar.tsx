import { MapPinCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="p-4 sm:px-8">
      <div className="flex items-center justify-between">
        <p>logo</p>
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <MapPinCheck className="w-8 h-8 text-[#F0A500]" />
            <p>
              <span className="text-slate-500">Address:</span> <br />
              Klen Plaza Gwagwalad, Abuja
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
    </header>
  );
};
