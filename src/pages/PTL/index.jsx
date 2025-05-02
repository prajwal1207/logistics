import React from "react";
import cover from "../../assets/Images/1.jpg";

const PTLPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Ensuring Cost-efficient <br />
            Logistics Experience
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Express - Part Truck Load
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            Adhunik Transport Services is a leading provider of part truckload (PTL) services,
            placing a priority on the secure and transparent transportation of
            goods. Managing a fleet of 6,000+ GPS-enabled vehicles operated by
            our trained drivers, we have earned recognition as a trusted brand
            committed to delivering reliable PTL services.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            PTL is an ideal option for businesses that don’t require a full
            truck space. This allows multiple shippers to share their load and
            pay for the specific space occupied by them, making it a
            cost-effective method for delivering goods. It facilitates the easy
            movement of goods from different customers through one truck. With
            our commitment, we stand out by optimizing routes, enhancing
            consignment security, reducing transit times, ensuring a
            cost-effective and efficient logistics experience with timely
            deliveries.
          </p>
          <h2 className="text-2xl text-red">
            PTL Services: What We Bring To The highways
          </h2>
          <ul class="list-disc list-inside text-gray-800 space-y-1">
            <li>Paid and To-Pay service</li>
            <li>Prepaid Freight service</li>
            <li>Express Logistics</li>
            <li>Distribution through the hub and spoke model</li>
            <li>Door pickup and delivery</li>
            <li>Hourly committed delivery</li>
            <li>COD / DOD delivery facility</li>
            <li>3rd party logistics services</li>
            <li>Economical reverse logistics</li>
            <li>Optimized transit times above par with industry standards</li>
            <li>Long-haul inbound & outbound</li>
            <li>Procurement planning, supplier management</li>
            <li>Cost-effective solutions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PTLPage;
