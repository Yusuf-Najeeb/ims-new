import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Unplug } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Unplug className="w-20 h-20 text-[#F0A500]" />,
    title: "Electrical Installation",
    description:
      "We offer top-notch electrical installation services for both commercial and residential projects. Our team of certified electricians ensures safe, efficient, and code-compliant installations.",
  },
  {
    icon: <Unplug className="w-20 h-20 text-[#F0A500]" />,
    title: "Solar System Installation",
    description:
      "Our solar system installation services provide sustainable energy solutions for your home or business. We design and install high-quality solar panels to help you reduce energy costs and minimize your carbon footprint.",
  },
  {
    icon: <Unplug className="w-20 h-20 text-[#F0A500]" />,
    title: "Sound System Installation",
    description:
      "We specialize in sound system installations for various settings, including homes, offices, and commercial spaces. Our experts design and install high-fidelity audio systems tailored to your needs.",
  },
  {
    icon: <Unplug className="w-20 h-20 text-[#F0A500]" />,
    title: "Security Systems",
    description:
      " Our security system installation services ensure the safety and security of your property. We provide state-of-the-art security solutions that offer peace of mind.",
  },
  {
    icon: <Unplug className="w-20 h-20 text-[#F0A500]" />,
    title: "Electrical Maintenance",
    description:
      "Regular electrical maintenance is crucial to prevent issues and ensure the longevity of your electrical systems. Our team offers comprehensive maintenance services for both residential and commercial properties.",
  },
];

export default function Offers() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="py-8 px-4 sm:px-8 bg-[#F5F5F5]">
      <h2 className="text-[#111827] text-4xl font-bold leading-normal text-center mb-8">
        We Offer the Best Services
      </h2>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center gap-y-4"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
