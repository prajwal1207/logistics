import React from "react";
import cover from "../../../assets/Images/1.jpg";

const AutomotivePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Automotive & Engineering
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Automotive & Engineering
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            In the automotive industry, we proudly stand as a premier strategic
            partner for renowned brands, meeting customized industry
            requirements. Our involvement in the automotive sector started in
            our early days with Maruti. Emphasizing efficiency and reliability,
            we ensure the smooth movement of automotive components, parts and
            finished products across the supply chain.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            In the dynamic landscape of engineering, we play a key role as a
            facilitator. Understanding that moving engineering goods & machinery
            can be tricky, we ensure careful handling and timely deliveries.
            Recognizing the crucial importance of keeping machinery and its
            parts in good shape, ensuring that each part receives special
            attention during the supply chain process
          </p>
        </div>
      </section>
    </div>
  );
};

export default AutomotivePage;
