export default function AllServices() {
  return (
    <section
      className="relative py-8 px-4 sm:px-8 bg-[#F5F5F5] text-[#F5F5F5] text-center mb-6"
      style={{ backgroundImage: "url('/backgd.png');" }}
    >
      <div className="absolute inset-0 bg-[#F0A500]/10"></div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">All Services</h2>
      <p className="text-xl font-semibold">Have a glance at all our services</p>
      <div className="flex flex-col sm:flex-row justify-center items-start gap-x-60 gap-y-10 text-left my-8">
        <div>
          <h3 className="font-semibold">Residential Buildings</h3>
          <ul className="pl-6">
            <li>Panel Installation and Upgrade</li>
            <li>Code Correction</li>
            <li>Breakers and Fuses</li>
            <li>Outlets, Circuits and Rewiring</li>
            <li>Indoor and Outdoor Lighting</li>
            <li>Data/Communication Lines</li>
            <li>Landscape Lightening</li>
            <li>Exhaust Fans</li>
            <li>Heat Extrantor Installation</li>
            <li>Smoke Detectors</li>
            <li>Home Theater installation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Commercial Buildings</h3>
          <ul className="pl-6">
            <li>Intercom Installation and Repair</li>
            <li>Hosted PBX Solutions</li>
            <li>Outdoor/Parking Lot Lightening</li>
            <li>Outlets, Circuits and Rewiring</li>
            <li>HID Lightening and Control</li>
            <li>Lightening Design</li>
            <li>Motors and Transformers</li>
            <li>Isolated Computer Circuits</li>
            <li>Data/Communication Cabling</li>
            <li>Ballast/Lamp Replacement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
