"use client";
import OurServices from "@/components/home/ourServices";
import Offers from "@/components/home/serviceOffers";
import AllServices from "@/components/services/allServices";
import PageHeader from "@/components/pageHeader";

export default function Service() {
  return (
    <main>
      <PageHeader
        title="We Love What We Do"
        description="We are committed to providing top-notch quality and reliability in all aspects of our services. This highlights the breadth and depth of our dedication to excellence in both technical and customer service"
        image="/backgd.png"
      />
      <OurServices />
      <Offers />
      <AllServices />
    </main>
  );
}
