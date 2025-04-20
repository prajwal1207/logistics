import React from "react";
import cover from "../../../assets/Images/1.jpg";

const ItPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            IT & Consumer Electronics
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            IT & Consumer Electronics
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            Adhunik Transport Services stands as a distinguished player in the world of IT and
            consumer electronics, providing specialized solutions tailored to
            specific needs. With our deep understanding of diverse markets, we
            strategically align our supply chain processes for precision and
            efficiency, meeting unique requirements.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            In the surging demand for consumer electronics, we take the lead in
            ensuring the careful handling and timely deliveries of products.
            From manufacturers to the anticipated destination, we minimize the
            transit time by accurately managing the logistics & supply chain of
            consumer electronics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ItPage;
