import React from "react";
import cover from "../../../assets/Images/1.jpg";

const FMCGPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            FMCG
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">FMCG</h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            In the fast-paced world of FMCG, where consumer demands are
            ever-changing and instant transportation 24/7 is required, we play a
            vibrant role. Our commitment involves efficiently transporting FMCG
            goods and ensuring on-time deliveries across the nation
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Being a reliable partner, we go beyond traditional logistics
            services. We are a standout player in the FMCG sector, highlighting
            our expertise in the establishment and maintenance of efficient
            distribution networks. Our expertise extends to providing timely
            deliveries to diverse locations. Acknowledging the sensitivity of
            certain FMCG products to temperature variations, we ensure product
            integrity through our specialized temperature-controlled storage and
            transportation solutions. Emphasizing adaptability, we customize our
            services to cater to the diverse nature of FMCG products, ensuring
            optimal handling and tailored delivery to meet the specific
            requirements of each item.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FMCGPage;
