// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import logo from "../../../assets/logo-white.svg";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleSection = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const sections = [
//     {
//       title: "About Us",
//       items: [
//         { label: "Our Growth Story", href: "/our-growth-story" },
//         { label: "Core Team", href: "/core-team" },
//         {
//           label: "Vision, Mission & Our Values",
//           href: "/vision-mission-values",
//         },
//         { label: "Our Pilots", href: "/our-pilots" },
//       ],
//     },
//     {
//       title: "What we offer",
//       items: [
//         { label: "Express - Full Truck Load", href: "/express-ftl" },
//         { label: "Express - Part Truck Load", href: "/express-ptl" },
//         { label: "Warehousing Service", href: "/warehouse" },
//         { label: "3PL Service", href: "/3pl" },
//       ],
//     },
//     {
//       title: "Industries we serve",
//       items: [
//         { label: "Automotive & Engineering", href: "/automotive-engineering" },
//         { label: "Retail & Fashion", href: "/retail-fashion" },
//         {
//           label: "IT & Consumer Electronics",
//           href: "/it-consumer-electronics",
//         },
//         {
//           label: "Healthcare & Pharmaceuticals",
//           href: "/healthcare-pharmaceuticals",
//         },
//         { label: "Books & Publishing", href: "/books-publishing" },
//         { label: "FMCG", href: "/fmcg" },
//       ],
//     },
//     {
//       title: "Join Us",
//       items: [
//         { label: "Privacy Policy", href: "/privacy-policy" },
//         { label: "Terms And Condition", href: "/terms-condition" },
//       ],
//     },
//   ];

//   return (
//     <footer className="bg-red text-gray-300 text-sm">
//       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
//         {/* Logo */}
//         <div className="md:col-span-1 flex flex-col items-start">
//           <img
//             src={logo}
//             alt="Adhunik Transport Services"
//             className="w-40 mb-2"
//           />
//           <p className="text-white font-semibold">Adhunik Transport Services</p>
//           <p className="text-red-500 text-xs font-semibold">
//             Making Business Simple
//           </p>
//         </div>

//         {/* Sections */}
//         {sections.map((section, index) => (
//           <div key={index}>
//             {/* Desktop Title */}
//             <div className="hidden md:block">
//               <h3 className="text-white font-semibold mb-2">{section.title}</h3>
//               <ul className="space-y-1">
//                 {section.items.map((item, i) =>
//                   item === "divider" ? (
//                     <hr key={i} className="my-2 border-gray-600" />
//                   ) : (
//                     <li key={i}>
//                       <Link to={item.href} className="hover:underline">
//                         {item.label}
//                       </Link>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>

//             {/* Mobile Accordion */}
//             <div className="md:hidden">
//               <button
//                 className="w-full flex justify-between items-center text-white font-semibold py-2"
//                 onClick={() => toggleSection(index)}
//               >
//                 {section.title}
//                 <FaChevronDown
//                   className={`transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                   size={18}
//                 />
//               </button>

//               {openIndex === index && (
//                 <ul className="space-y-1 pb-2 pl-2 text-sm">
//                   {section.items.map((item, i) =>
//                     item === "divider" ? (
//                       <hr key={i} className="my-2 border-white" />
//                     ) : (
//                       <li key={i}>
//                         <Link to={item.href} className="hover:underline">
//                           {item.label}
//                         </Link>
//                       </li>
//                     )
//                   )}
//                 </ul>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center py-4 border-t border-white text-xs">
//         Adhunik Transport Services 2024 – All Rights Reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { useState } from "react";
import { FaChevronDown, FaRegCopyright } from "react-icons/fa";
import logo from "../../../assets/logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "About Us",
      items: [
        { label: "Our Growth Story", href: "/our-growth-story" },
        { label: "Core Team", href: "/core-team" },
        {
          label: "Vision, Mission & Our Values",
          href: "/vision-mission-values",
        },
        { label: "Our Pilots", href: "/our-pilots" },
      ],
    },
    {
      title: "What we offer",
      items: [
        { label: "Express - Full Truck Load", href: "/express-ftl" },
        { label: "Express - Part Truck Load", href: "/express-ptl" },
        { label: "Warehousing Service", href: "/warehouse" },
        { label: "3PL Service", href: "/3pl" },
      ],
    },
    {
      title: "Industries we serve",
      items: [
        { label: "Automotive & Engineering", href: "/automotive-engineering" },
        { label: "Retail & Fashion", href: "/retail-fashion" },
        {
          label: "IT & Consumer Electronics",
          href: "/it-consumer-electronics",
        },
        {
          label: "Healthcare & Pharmaceuticals",
          href: "/healthcare-pharmaceuticals",
        },
        { label: "Books & Publishing", href: "/books-publishing" },
        { label: "FMCG", href: "/fmcg" },
      ],
    },
    {
      title: "Join Us",
      items: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms And Condition", href: "/terms-condition" },
      ],
    },
  ];

  return (
    <footer className="bg-red text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img
            src={logo}
            alt="Adhunik Transport Services"
            className="w-40 mb-2"
          />
       
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index}>
            {/* Desktop Title */}
            <div className="hidden md:block">
              <h3 className="text-[rgb(0,0,0)] font-bold mb-2 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) =>
                  item === "divider" ? (
                    <hr key={i} className="my-2 border-gray-600" />
                  ) : (
                    <li key={i}>
                      <Link
                        to={item.href}
                        className="text-white hover:text-red-500 text-sm font-medium transition-all duration-300 transform hover:text-[rgb(0,0,0)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden">
              <button
                className="w-full flex justify-between items-center text-white font-semibold py-2 text-sm"
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
                        <Link
                          to={item.href}
                          className="text-white hover:text-red-500 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-4 border-t border-white text-l">
        Adhunik Transport Services 2024 –  © All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
