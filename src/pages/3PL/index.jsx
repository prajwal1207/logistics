import React from "react";
import cover from "../../assets/Images/1.jpg";

const ThreePL = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Experience seamless <br /> 3PL excellence
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Third-party Logistics
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            At Adhunik Transport Services, we excel in providing top-notch third-party
            logistics (3PL) services. Being an expert, we seamlessly integrate
            supply chains, offering comprehensive solutions for efficient
            warehousing, transportation and distribution. We optimize operations
            in our 3PL services, ensuring our clients’ goods reach the desired
            destination reliably and on time. With a commitment to precision and
            reliability, we stand as a trusted partner in streamlining logistics
            processes. From inventory management to transport coordination, we
            tailor our services to meet the unique needs of each client,
            contributing to enhanced efficiency and success across diverse
            industries.
          </p>

          <h2 className="text-2xl text-red">Our Offerings</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-800">
            <li>Warehouse management solution integrated with ERP systems</li>
            <li>Just In Time Supplies (JIT) DI system</li>
            <li>Direct On-Line Deliveries (DOL)</li>
            <li>Combination of JIT and DOL</li>
            <li>System and Management of “SPD” Concept</li>
            <li>Bin Charging, Kitting and Consolidation</li>
            <li>
              Milk Run Application Distribution through Hub & Spoke System
            </li>
            <li>First In First Out (FIFO) Total Supply Chain Management</li>
            <li>Bonded & Non–Bonded Warehousing facilities</li>
            <li>Clock Room Facility Order Processing</li>
            <li>MIS (Management Information System) Pre-delivery Inspection</li>
            <li>Space for Segregation Space for Testing Equipment</li>
            <li>Bar Coding / KANBAN Movement with Mobile Communication</li>
            <li>
              Dedicated Vehicles / Designed Vehicles Logistics Related Support
            </li>
            <li>Tracking and Tracing through GPS</li>
            <li>Inventory Storage and Management</li>
            <li>Shipping And Distribution</li>
            <li>Customs Clearance/Declaration</li>
            <li>Packaging And Warehousing</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ThreePL;

// ThreePL
