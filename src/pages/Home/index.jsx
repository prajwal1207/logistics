import React from "react";
import cover from "../../assets/Images/1.jpg";
import CarouselCard from "@/components/Cards/ServicersCard";
import OrganizationSection from "./OrganizationSection";
import CounterSection from "./CounterSection";
import ClientsLogoSection from "./ClientsLogo";
import TestimonialsSection from "./TestimonialSection";

const index = () => {
  return (
    <div>
      <section className="">
        <img src={cover} alt="" />
      </section>
      <section className="py-20">
        <h1 className="text-4xl text-center font-bold text-red ">
          WHAT WE OFFER
        </h1>
        <CarouselCard />
      </section>
      <section>
        <OrganizationSection />
      </section>
      <section className="flex py-20 items-center text-center flex-col gap-5">
        <h1 className="text-4xl font-bold text-red">Our Strength</h1>
        <p className="w-[80%]  md:w-[40%] text-xl">
          We are recognized for our expertise in streamlined supply chain and
          logistics services. Our establishment specializes in delivering
          customer-centric solutions, standing as a trusted companion on the
          path to success.
        </p>
      </section>
      <section className="px-6 md:px-20 py-10">
        <CounterSection />
      </section>
      <section className="py-10">
        <h1 className="text-4xl text-red py-6 font-bold text-center">
          Our Group of Companies
        </h1>
        <ClientsLogoSection />
      </section>
      <section className="py-20">
        <p className="text-xl text-gray-800 font-bold text-center">
          WHAT PEOPLE SAY
        </p>
        <h1 className="text-4xl text-red py-4 font-bold text-center">
          Testimonials
        </h1>
        <TestimonialsSection />
      </section>
    </div>
  );
};

export default index;
