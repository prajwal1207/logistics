import React from "react";
import cover from "../../../assets/Images/1.jpg";

const HealthCarePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Healthcare & Pharmaceuticals
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Healthcare & Pharmaceuticals
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            At Adhunik Transport Services, we cater to the unique needs of the Healthcare and
            Pharmaceutical sectors, providing supply chain and logistics
            solutions for the seamless flow of medical and pharma supplies while
            adhering to strict regulatory standards. In transportation, our
            expertise includes temperature-controlled storage and secure
            handling of sensitive healthcare and pharmaceutical products.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            In the Healthcare sector, where time-sensitive delivery of medical
            supplies and equipment is critical, we lead the way in making it
            achievable. We are adept at managing the efficiency of healthcare
            supplies by delivering them with enhanced safety & security to their
            destinations.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            In the Pharmaceutical sector, from raw material transportation to
            the delivery of finished pharmaceutical products, we ensure a secure
            and compliant supply chain throughout the process. Our specialized
            services cater to the customized requirements of pharmaceutical
            logistics, facilitating timely deliveries, maximizing product
            preservation and maintaining integrity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HealthCarePage;
