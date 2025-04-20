import React from "react";
import cover from "../../assets/Images/1.jpg";

const VissionMission = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Elevating logistics with daily <br />
            excellence, guided by core principles
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Vision, Mission & Our Values
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <h2 className="text-2xl text-red">Vision</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            We aim to emerge as the torchbearers in the logistics industry. Our
            vision is to establish Adhunik Transport Services as the most grounded worldwide
            logistics and supply chain management company as a trusted partner
            to all our clients. We envision surpassing our success & customer
            loyalty levels year by year.
          </p>

          <h2 className="text-2xl text-red">Mission</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            To promote teamwork & create a work environment encouraging the
            workforce to continuously strive for quality & excellence, providing
            high-quality service to customers under one roof.
          </p>

          <h2 className="text-2xl text-red">Quality Service</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            We are an ISO-certified logistics service provider resolved to give
            quality logistics services reliably, at a sensible cost and to
            ceaselessly enhance the same to enchant clients on a reasonable
            premise.
          </p>

          <h2 className="text-2xl text-red">Our Values</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Adhunik Transport Services has always been values-driven. Our shared values guide
            our actions that help us make a difference. These values continue to
            direct the growth and business of OM Group. The nine core OM values
            strengthening the way we do business are
          </p>

          <ol class="list-decimal pl-6 space-y-4 text-gray-800">
            <li>
              <strong>Safety-Focused:</strong> We believe that safety is of
              utmost importance, extending beyond the company to our customers,
              communities, and families. We endeavour to be the standard of the
              business through innovation and persistent learning.
            </li>
            <li>
              <strong>Portfolio:</strong> Offering the world a complete
              portfolio of logistics services that anticipate and satisfy
              clients’ desires and needs.
            </li>
            <li>
              <strong>Innovation:</strong> Ensuring social responsibilities and
              accomplishing economic growth.
            </li>
            <li>
              <strong>Quality:</strong> What we do, we do well.
            </li>
            <li>
              <strong>Responsive:</strong> We understand the customer’s need, so
              we know to act quickly so that others can perform at their best.
            </li>
            <li>
              <strong>Entrepreneurial Soul:</strong> We embrace innovations when
              it comes to technology. We know how to think creatively as
              entrepreneurs for operational excellence to create profitable
              growth and value for our stakeholders.
            </li>
            <li>
              <strong>Passion:</strong> Committed at heart and mind.
            </li>
            <li>
              <strong>Diversity:</strong> As inclusive as our brands.
            </li>
            <li>
              <strong>Leadership:</strong> Leadership means different things to
              different people and effective leadership styles can vary
              significantly depending on the client and the situation.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default VissionMission;
