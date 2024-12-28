"use client";

import Hero from "@/components/home/hero";
import AboutUs from "@/components/home/aboutUs";
import OurServices from "@/components/home/ourServices";
import Offers from "@/components/home/serviceOffers";
import Projects from "@/components/home/projects";
import Testimonials from "@/components/home/testimonials";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <Offers />
      <Projects />
      <Testimonials />
    </main>
  );
}
