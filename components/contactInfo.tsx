"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import EstimateModal from "@/components/estimateModal";
import { PhoneIncoming, Mail, MapPinHouse } from "lucide-react";

export default function ContactUs() {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="p-8 bg-[#F5F5F5] text-[#111827]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">Phone</h3>

            <p className="flex gap-2">
              <PhoneIncoming className="w-6 h-6 text-[#F0A500]" />
              <span>+234 234 234 234</span>
            </p>
            <p>Available 24/7 for emergencies and inquiries.</p>

            <h3 className="text-xl font-semibold">Email</h3>
            <p className="flex gap-2">
              <Mail className="w-6 h-6 text-[#F0A500]" />
              <span>info@yourcompany.com</span>
            </p>
            <p>We respond to all emails within 24 hours.</p>

            <h3 className="text-xl font-semibold">Office Location</h3>

            <p className="flex gap-2">
              <MapPinHouse className="w-6 h-6 text-[#F0A500]" />
              <span>Klen Plaza, Gwagwalada, Abuja.</span>
            </p>
            <p>
              Visit us during our office hours: Monday - Friday, 9 AM - 5 PM
            </p>
          </div>

          <div className="hidden md:flex w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d367.3114979907991!2d7.084780716802912!3d8.940649580790149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x104e8806622f6b87%3A0x3b3d8b38e80517f6!2sKlen%20Plaza%2C%20Gwagwalada!3m2!1d8.9407803!2d7.0848178!4m5!1s0x104e8806622f6b87%3A0x3b3d8b38e80517f6!2sKlen%20Plaza!3m2!1d8.9407803!2d7.0848178!5e0!3m2!1sen!2sng!4v1735575171808!5m2!1sen!2sng"
              style={{
                border: 0,
              }}
              className="w-full h-full"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Request a Free Estimate</h2>
          <p className="mt-2 sm:max-w-[80%] mx-auto">
            Use our simple online form to request a free estimate for any of our
            services. Provide us with some details about your project, and our
            team will get back to you with an accurate quote.
          </p>
          <Button
            onClick={handleOpen}
            className="mt-4 inline-block bg-[#2D4AF0] text-white px-4 py-2 rounded-md hover:bg-[#2D4AF0]/70"
          >
            Request Free Estimate
          </Button>
        </div>
      </div>
      <EstimateModal open={isOpen} onClose={handleClose} />
    </section>
  );
}
