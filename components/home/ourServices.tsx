"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LightbulbIcon,
  BoltIcon,
  ShieldCheckIcon,
  HomeIcon,
  SparklesIcon,
  WifiIcon,
  Printer,
  LampDesk,
} from "lucide-react";
import { cn } from "@/lib/utils";

const residentialServices = [
  {
    title: "Power Distribution",
    description:
      "Our residential electrical designs ensure that your home receives a reliable power supply. We design electrical panels and circuits to meet the specific needs of your household.",
    icon: BoltIcon,
    color: "bg-amber-500",
  },
  {
    title: "Lighting",
    description:
      "We create lighting plans that provide adequate illumination for every room, enhancing both functionality and aesthetics.",
    icon: LightbulbIcon,
    color: "bg-blue-500",
  },
  {
    title: "Safety",
    description:
      "Safety is our top priority. Our designs include proper grounding, bonding, and circuit protection to prevent electrical hazards.",
    icon: ShieldCheckIcon,
    color: "bg-green-500",
  },
  {
    title: "Energy Efficiency",
    description:
      "We incorporate energy-efficient lighting and appliances to help you save on energy bills and reduce your environmental footprint.",
    icon: SparklesIcon,
    color: "bg-teal-500",
  },
  {
    title: "Smart Home Integration",
    description:
      "We offer smart home solutions, including automated lighting, security systems, and home automation, to make your home more convenient and secure.",
    icon: HomeIcon,
    color: "bg-purple-500",
  },
];

const commercialServices = [
  {
    title: "Power Distribution Systems",
    description:
      "Our commercial electrical designs include comprehensive power distribution systems, ensuring that your building receives a reliable and efficient power supply.",
    icon: BoltIcon,
    color: "bg-amber-500",
  },
  {
    title: "Lighting Systems",
    description:
      "We strategically place lighting fixtures to ensure optimal illumination throughout your commercial space, including backup emergency lighting systems.",
    icon: LightbulbIcon,
    color: "bg-blue-500",
  },
  {
    title: "Safety Measures",
    description:
      "Proper grounding and bonding are essential to prevent fire hazards and electrical shocks. Our designs include safety measures to prevent overloaded circuits and arc faults.",
    icon: ShieldCheckIcon,
    color: "bg-green-500",
  },
  {
    title: "Energy-Efficiency Measures",
    description:
      "We incorporate energy-efficient devices, fixtures, and equipment to reduce energy waste and lower operational costs.",
    icon: SparklesIcon,
    color: "bg-teal-500",
  },
  {
    title: "Communication Systems",
    description:
      "Our designs include properly installed communication systems such as telephone systems, WiFi, broadband internet, and teleconferencing facilities.",
    icon: WifiIcon,
    color: "bg-indigo-500",
  },
  {
    title: "Security Systems",
    description:
      "We integrate security systems, burglar alarms, and other important security measures to ensure the safety of your commercial space.",
    icon: LampDesk,
    color: "bg-red-500",
  },
];

type ServiceCardProps = {
  service: {
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    color: string;
  };
  index: number;
};

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div
          className={`inline-block p-3 ${service.color} rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <service.icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
      <div
        className={`h-1 ${service.color} w-0 group-hover:w-full transition-all duration-300 ease-out`}
      />
    </motion.div>
  );
}

export default function OurServices() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">(
    "residential"
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of electrical engineering services tailored
            to meet the needs of various industries.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 mb-8">
            <button
              onClick={() => setActiveTab("residential")}
              className={cn(
                "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                activeTab === "residential"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              <HomeIcon className="h-5 w-5" />
              Residential
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={cn(
                "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                activeTab === "commercial"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              <Printer className="h-5 w-5" />
              Commercial
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeTab === "residential"
                ? residentialServices.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      service={service}
                      index={index}
                    />
                  ))
                : commercialServices.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      service={service}
                      index={index}
                    />
                  ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
