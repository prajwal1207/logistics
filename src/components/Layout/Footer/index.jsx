import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from '../../../assets/logo.jpg'

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "About Us",
      items: [
        "Our Growth Story",
        "Core Team",
        "Vision, Mission & Our Values",
        "Our Pilots",
      ],
    },
    {
      title: "What we offer",
      items: [
        "Express - Full Truck Load",
        "Express - Part Truck Load",
        "Speed Trucking",
        "Air Service",
        "Rail Service",
        "Warehousing Service",
        "3PL Service",
      ],
    },
    {
      title: "Industries we serve",
      items: [
        "Automotive & Engineering",
        "Retail & Fashion",
        "IT & Consumer Electronics",
        "Healthcare & Pharmaceuticals",
        "Books & Publishing",
        "FMCG",
        "Projects",
      ],
    },
    {
      title: "Join Us",
      items: [
        "Career",
        "Franchise",
        "Om Institute",
        "Retail Partner",
        "divider",
        "Privacy Policy",
        "Terms And Condition",
      ],
    },
  ];

  return (
    <footer className="bg-red text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img src={logo} alt="Associated Road Carriers" className="w-40 mb-2" />
          <p className="text-white font-semibold">Associated Road Carriers</p>
          <p className="text-red-500 text-xs font-semibold">
            Making Business Simple
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index}>
            {/* Desktop Title */}
            <div className="hidden md:block">
              <h3 className="text-white font-semibold mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item, i) =>
                  item === "divider" ? (
                    <hr key={i} className="my-2 border-gray-600" />
                  ) : (
                    <li key={i}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden">
              <button
                className="w-full flex justify-between items-center text-white font-semibold py-2"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {openIndex === index && (
                <ul className="space-y-1 pb-2 pl-2 text-sm">
                  {section.items.map((item, i) =>
                    item === "divider" ? (
                      <hr key={i} className="my-2 border-white" />
                    ) : (
                      <li key={i}>
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-4 border-t border-white text-xs">
        Associated Road Carriers 2024 – All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
