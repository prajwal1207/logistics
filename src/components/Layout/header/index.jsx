import React, { useState } from "react";
import logo from "../../../assets/logo.jpg";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const menuItems = [
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
      <div className="bg-red w-full h-8"></div>

      <nav className="bg-white w-full py-3 flex justify-between items-center relative px-4 sm:px-8 md:px-16">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" className="h-14 object-cover" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-md font-medium text-gray-800 items-center relative">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => handleDropdownToggle(index)}
                className="hover:text-blue-600 flex items-center gap-1 focus:outline-none"
              >
                {item.label}
                {item.dropdown?.length > 0 && <span>▾</span>}
              </button>

              {activeDropdown === index && item.dropdown?.length > 0 && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white border shadow-md z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={subItem.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100 text-md text-gray-700"
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
                <div className="px-4 py-3 text-gray-800 font-medium">
                  {item.label}
                </div>
                {item.dropdown?.length > 0 && (
                  <div className="pl-4 pb-2">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-md text-gray-600 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
                {!item.dropdown && item.href && (
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 text-md text-gray-600 hover:bg-gray-100"
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
