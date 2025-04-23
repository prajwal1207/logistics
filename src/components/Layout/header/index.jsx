import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    dropdown: [
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
    label: "What We Offer",
    dropdown: [
      { label: "Express PTL", href: "/express-ptl" },
      { label: "Express FTL", href: "/express-ftl" },
      { label: "3PL", href: "/3pl" },
      { label: "Warehouse", href: "/warehouse" },
    ],
  },
  {
    label: "Industries We Serve",
    dropdown: [
      { label: "Automotive & Engineering", href: "/automotive-engineering" },
      { label: "Retail & Fashion", href: "/retail-fashion" },
      { label: "IT & Consumer Electronics", href: "/it-consumer-electronics" },
      {
        label: "Healthcare & Pharmaceuticals",
        href: "/healthcare-pharmaceuticals",
      },
      { label: "Books & Publishing", href: "/books-publishing" },
      { label: "FMCG", href: "/fmcg" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="w-full border-b shadow-md z-[999] relative">
      <div className="w-full h-auto text-white font-bold bg-gradient-to-r from-white via-[#c32126] to-red-700 bg-[length:200%_200%] animate-subtleGradient">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-end items-end gap-2 text-sm sm:text-[14px]">
          <a
            href="https://wa.me/917000448907"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline"
          >
            <FaWhatsapp size="1.5rem" />
          </a>

          <a
            href="tel:+917000448907"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt size="1.2rem" />
            +91 7000448907
          </a>

          <a
            href="mailto:info@adhuniktransport.com"
            className="flex items-center gap-2 hover:underline"
          >
            <MdOutlineAttachEmail size="1.4rem" />
            info@adhuniktransport.com
          </a>
        </div>
      </div>

      <nav className="bg-white w-full py-3 flex justify-between items-center relative px-4 sm:px-8 md:px-16">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" className="h-18 object-cover" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-md font-medium text-gray-800 items-center relative">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => handleDropdownToggle(index)}
                className="flex items-center gap-1 focus:outline-none transition-all duration-300 hover:text-[#c32126]"
              >
                <Link to={item.href || "#"}>{item.label}</Link>
                {item.dropdown?.length > 0 && <span>▾</span>}
              </button>

              {item.dropdown?.length > 0 && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white border shadow-md z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-auto`}
                >
                  {item.dropdown.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={subItem.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-[#c32126] transition duration-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <RxCross2 size={24} />
            ) : (
              <IoMenuSharp size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 border-t mt-2 md:hidden">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b">
                {item.dropdown?.length > 0 ? (
                  <>
                    <div className="px-4 py-3 text-gray-800 font-medium">
                      {item.label}
                    </div>
                    <div className="pl-4 pb-2">
                      {item.dropdown.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          to={subItem.href}
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-md text-gray-600 hover:bg-gray-100 hover:text-[#c32126] transition duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 hover:text-[#c32126] transition duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
