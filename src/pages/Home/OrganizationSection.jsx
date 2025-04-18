import React from "react";
import section from "../../assets/section.jpg";

const OrganizationSection = () => {
  return (
    <div className=" flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={section}
          alt="Our Organization"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 gap-6">
        <p className="text-xl font-bold text-gray-800 ">ABOUT US</p>
        <p className="text-3xl md:text-4xl font-bold text-red">
          Our Organisation
        </p>

        <p className="text-base md:text-lg text-gray-800">
          OM Logistics, with more than three decades of expertise, proudly
          stands as the premier supply chain and logistics management company in
          India. We have meticulously developed a state-of-the-art
          infrastructure, committed to delivering unparalleled services to all
          our stakeholders. Our core philosophy, “Making Business Simple,”
          drives us to provide exceptional solutions.
        </p>

        <p className="text-base md:text-lg text-gray-800">
          We cater to large commercial enterprises as well as mid and
          small-scale businesses. Embark on a journey of innovation, reliability
          and excellence with our team at OM Logistics as we redefine the
          standards of the supply chain and logistics industry.
        </p>

        <p className="text-base md:text-lg text-gray-800">
          Our progressive mindset generates trust through work, embodying our
          mantra, “YOU TRUST US, WE CARE.” Providing services for businesses of
          all sizes, our team meets every need with a modern approach, ensuring
          things keep moving smoothly under our expertise.
        </p>

        <div className="relative bg-red text-white text-lg p-10 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px]  ">
          <p>
            To promote teamwork and create a work environment that encourages
            our workforce to continuously strive for quality & excellence,
            thereby providing high-quality service to our customers.
          </p>
          <div className="absolute left-0 -bottom-8 w-0 h-0 border-t-[40px] border-r-[40px] border-t-red border-r-transparent"></div>
        </div>
        <span className="py-6">

          <h2 className="text-red text-2xl font-bold ">Our Mission Statement</h2>
          <p className="text-lg  text-gray-800">Message From Our Managing Director's Desk</p>
        </span>
      </div>
    </div>
  );
};

export default OrganizationSection;
