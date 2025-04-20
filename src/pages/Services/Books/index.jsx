import React from "react";
import cover from "../../../assets/Images/1.jpg";

const BooksPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Books & Publishing
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Books & Publishing
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            At Adhunik Transport Services, we emerge as a reliable partner for educational
            institutions and print media houses, proficient in connecting
            publishers to the market and handling logistics for print media,
            books and magazines. We ensure the secure and timely delivery of
            print materials, understanding their delicate nature and importance.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Customization is a key aspect of our service, acknowledging that
            print materials vary in size and quality. This adaptability ensures
            that each print resource receives specialized attention during the
            supply chain. As a trusted logistics partner in the publishing
            sector, we play a crucial role in ensuring that print material
            reaches its destination on time, contributing to the smooth flow of
            knowledge nationwide.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BooksPage;
