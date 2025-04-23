import React from "react";
import  driver from "../../assets/drivers.jpg";

const OurPilotsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={driver} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Our Pilots on <br /> Wheels
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Our Pilots
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            At Adhunik Transport Services Ltd, we acknowledge our drivers as the “Pilots on
            Wheels,” serving as the backbone of our company’s operations. We
            highly appreciate and value the Pilots’ dedication to safety and the
            timely delivery of goods. The dedication of these professionals
            holds special significance, fostering a culture within our company
            that prioritizes and respects the importance of road safety. Their
            relentless efforts extend to working around the clock, ensuring the
            safety of goods during the delivery process..
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurPilotsPage;
