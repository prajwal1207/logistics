import React from "react";
import cover from "../../assets/Images/1.jpg";

const FTLPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Prioritizing Secure & <br />
            on-time deliveries
          </h1>
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Express - Full Truck Load
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            Being a distinguished player in the supply chain and logistics
            sector, Adhunik Transport Services provides well-established services for full
            truckloads, assuring the secure and visible transportation of goods.
            With a fleet of 200+ vehicles, we offer dependable Full
            Truck Load services to meet our client’s requirements.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            At Adhunik Transport Services, full truckload service ensures smooth and reliable
            transportation for bulk consignments. The entire truck or fleet of
            trucks is exclusively dedicated to the client’s goods, prioritizing
            secure and on-time deliveries while addressing the specific needs of
            the business. Businesses can rely on Adhunik Transport Services for an efficient
            FTL experience, ensuring deliveries reach their destination safely
            and securely.
          </p>
          <h2 className="text-2xl text-red">
            FTL Services: What We Bring To The highways
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
         
            <li>Door pickup and delivery</li>
            <li>Hourly committed delivery</li>
            <li>ODC consignment movements</li>
            <li>COD / DOD delivery facility</li>
            <li>Economical reverse logistics</li>
            <li>Optimized transit times above par with industry</li>
            <li>Long-haul inbound & outbound</li>
            <li>Procurement planning, supplier management</li>
            <li>Cost-effective solutions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FTLPage;
