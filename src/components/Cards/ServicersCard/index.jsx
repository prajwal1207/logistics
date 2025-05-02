import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import logo from "../../../assets/Images/1.jpg";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Express - FTL",
    desc: `Being a distinguished player in the supply chain and logistics sector, Adhunik Transport Services provides well-established services for full truckloads, assuring the secure and visible transportation of goods. With a fleet of more than 400+ GPS-enabled vehicles`,
    img: "/img/speed-trucking.jpg",
    buttonText: "Express - FTL",
    href: "express-ftl",
  },
  {
    title: "Warehouse",
    desc: `Adhunik Transport Services excels in providing top-notch third-party logistics (3PL) services. As experts in the field, they seamlessly integrate into supply chains, offering comprehensive solutions for efficient warehousing, transportation, and distribution.`,
    img: "/img/warehouse.jpg",
    buttonText: "Warehouse",
    href: "/Warehouse",
  },
  {
    title: "3Pl",
    desc: `Adhunik Transport Services excels in providing top-notch third-party logistics (3PL) services. As experts in the field, they seamlessly integrate into supply chains, offering comprehensive solutions for efficient warehousing, transportation, and distribution.`,
    img: "/img/rail.jpg",
    buttonText: "3pl",
    href: "/3pl",
  },
  {
    title: "Express - PTL",
    desc: `Adhunik Transport Services positions as a leading provider of part truckload (PTL) services, prioritizing the secure and transparent transportation of goods. Managing a fleet of 6,000+ GPS-enabled vehicles operated by trained drivers`,
    img: "/img/ptl.jpg",
    buttonText: "Express PTL",
    href: "/express-ptl",
  },
  {
    title: "Express - FTL",
    desc: `Being a distinguished player in the supply chain and logistics sector, Adhunik Transport Services provides well-established services for full truckloads, assuring the secure and visible transportation of goods. With a fleet of more than 400+ GPS-enabled vehicles`,
    img: "/img/speed-trucking.jpg",
    buttonText: "Express - FTL",
    href: "express-ftl",
  },
  {
    title: "Warehouse",
    desc: `Adhunik Transport Services excels in providing top-notch third-party logistics (3PL) services. As experts in the field, they seamlessly integrate into supply chains, offering comprehensive solutions for efficient warehousing, transportation, and distribution.`,
    img: "/img/warehouse.jpg",
    buttonText: "Warehouse",
    href: "/Warehouse",
  },
  {
    title: "3Pl",
    desc: `Adhunik Transport Services excels in providing top-notch third-party logistics (3PL) services. As experts in the field, they seamlessly integrate into supply chains, offering comprehensive solutions for efficient warehousing, transportation, and distribution.`,
    img: "/img/rail.jpg",
    buttonText: "3pl",
    href: "/3pl",
  },
  {
    title: "Express - PTL",
    desc: `Adhunik Transport Services positions as a leading provider of part truckload (PTL) services, prioritizing the secure and transparent transportation of goods. Managing a fleet of 400+ GPS-enabled vehicles operated by trained drivers`,
    img: "/img/ptl.jpg",
    buttonText: "Express PTL",
    href: "/express-ptl",
  },
];

const CarouselCard = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto p-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="px-4"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <img
                src={logo}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-bold text-red text-center mb-2">
                  {card.title}
                </h3>
                <p className="text-md min-h-60 text-gray-800 text-center mb-4">
                  {card.desc}
                </p>
                <div className="flex justify-center mt-auto">
                  <Link to={card.href}>
                    <button className="bg-red hover:bg-red/80 text-white min-w-18 px-6 py-2 text-sm rounded-full">
                      {card.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCard;
