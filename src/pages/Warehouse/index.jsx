import React from "react";
import cover from "../../assets/section.jpg";

const WarehousePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Ensuring Efficient <br />
            Order Fulfillment
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Warehousing
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            OM Logistics is proud to provide exceptional warehousing facilities
            to meet the varied needs of our customers. We have a vast
            warehousing space of over 25 million square feet across India,
            ensuring the safety and easy accessibility of goods. Our advanced
            inventory management systems provide real-time tracking and offer
            transparency in inventory. Whether a small enterprise or a large
            corporation, we offer scalable warehousing solutions, enabling
            businesses to adapt to changing storage needs. We stand as a
            trustworthy partner, dedicated to ensuring efficient order
            fulfillment, accurate deliveries and the security of inventory.
          </p>

          <h2 className="text-2xl text-red">our offerings</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-800">
            <li>Warehouse management solution integrated with ERP systems.</li>
            <li>
              Strong cross-dock for easy flow through, value-added Service (VAS)
              with quick transshipment facility.
            </li>
            <li>
              Equipped warehouses with modern material-handling equipment.
            </li>
            <li>
              Smart workforce availability for efficient logistics coordination.
            </li>
            <li>
              Item-wise (part-wise) / location-wise inventory management with
              traceability, recall capability, and aging analysis.
            </li>
            <li>
              Facilities for bonded and non-bonded warehousing across PAN India.
            </li>
            <li>
              Customized packaging solutions, article tagging, quality check,
              and order management to ensure on-time delivery.
            </li>
            <li>
              Inventory management with modern warehousing facilities in SEZ
              locations (excise-free area).
            </li>
            <li>
              Flexible options for warehouse utilization, i.e., Sq. Mtr / CBM.
            </li>
            <li>On-demand pallet service.</li>
            <li>
              Providing robust warehousing solutions with full safety and
              security of the material.
            </li>
            <li>Great workforce for efficient logistics coordination.</li>
            <li>
              Provision of an extended sales office for the organization’s
              network reach.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WarehousePage;
