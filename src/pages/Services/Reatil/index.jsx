import React from "react";
import cover from "../../../assets/Images/1.jpg";

const ReatailPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Retail & Fashion
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Retail & Fashion
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            In the ever-evolving fashion landscape across diverse regions, OM
            ensures the secure and timely delivery of fashion products to
            retailers and brands. With our core emphasis on flexibility, our
            service adapts to the varied sizes and styles of retail & fashion
            goods, providing personalized attention throughout the supply chain.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            As a reliable logistics partner in the retail, apparel and fashion
            sectors, we play a vital role in streamlining the movement of goods.
            Our efforts facilitate the smooth transition of products from
            manufacturers to the retail market. Our dedicated team ensures
            timely deliveries and careful handling, contributing to the success
            of our clients in the dynamic world of fashion and retail.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReatailPage;
