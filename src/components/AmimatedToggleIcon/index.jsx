import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AnimatedToggleIcon = ({
  isOpen,
  openIcon = <FaMinus />,
  closeIcon = <FaPlus />,
  size = "text-2xl",
  openColor = "text-red-500",
  closeColor = "text-gray-500",
  onClick,
}) => {
  console.log(isOpen);
  return (
    <div
      onClick={onClick}
      className={`transition-transform duration-300 ease-in-out transform ${
        isOpen ? `rotate-180 ${openColor}` : `rotate-0 ${closeColor}`
      } ${size}`}
    >
      {isOpen ? openIcon : closeIcon}
    </div>
  );
};

export default AnimatedToggleIcon;
