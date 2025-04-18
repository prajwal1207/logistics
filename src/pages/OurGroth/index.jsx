import React from "react";
import cover from "../../assets/Images/1.jpg";

const OurGrothPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            From Humble Beginnings <br /> To Soaring Heights
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Our Growth Story
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            In the early chapters of 1991, we at OM Logistics embarked on a
            transformative journey with a focus on quality and safety in our
            operations. As the term “Logistics” gained prominence for smartly
            moving things, we showed a commitment to quality and efficiency. By
            1999, our company had evolved into a comprehensive logistics
            solutions provider, showcasing our leadership in the systematic
            management of EXIM cargo.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Throughout the early 2000s, our focus on technology integration and
            real-time tracking solutions highlighted our commitment to a
            customer-centric approach. We showcased proactive measures by
            strategically expanding our network and adding pin codes to meet our
            client’s requirements.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            In 2015, we at OM Logistics celebrated our 25th anniversary, marking
            a significant milestone in our journey. Driven by a strong vision to
            cover every square inch of India, we extended our services to Port
            Blair. In the subsequent years, we actively broadened our network to
            SAARC countries like Nepal, Bhutan, Bangladesh & Myanmar,
            effortlessly extending our reach to neighbouring nations.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            In 2023, we introduced Retail Express, a versatile service catering
            to businesses of all sizes, from small to large enterprises. Our
            commitment includes delivering goods to every corner of India,
            ensuring easy market accessibility. The service is tailored to meet
            the unique needs of each business, providing efficient and
            personalized logistics assistance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurGrothPage;
