import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import logo from "../../../assets/images/1.jpg";

const cardData = [
  {
    title: "Express - FTL",
    desc: `Being a distinguished player in the supply chain and logistics sector, Associated Road Carriers provides well-established services for full truckloads, assuring the secure and visible transportation of goods. With a fleet of more than 6000+ GPS-enabled vehicles`,
    img: "/img/speed-trucking.jpg",
    buttonText: "Speed Trucking",
  },
  {
    title: "Warehouse",
    desc: `Associated Road Carriers excels in providing top-notch third-party logistics (3PL) services. As experts in the field, they seamlessly integrate into supply chains, offering comprehensive solutions for efficient warehousing, transportation, and distribution.`,
    img: "/img/warehouse.jpg",
    buttonText: "Warehouse",
  },
  {
    title: "3Pl",
    desc: `Associated Road Carriers excels in providing top-notch third-party logistics (3PL) services. As experts in the field, they seamlessly integrate into supply chains, offering comprehensive solutions for efficient warehousing, transportation, and distribution.`,
    img: "/img/rail.jpg",
    buttonText: "Rail services",
  },
  {
    title: "Express - PTL",
    desc: `Associated Road Carriers positions as a leading provider of part truckload (PTL) services, prioritizing the secure and transparent transportation of goods. Managing a fleet of 6,000+ GPS-enabled vehicles operated by trained drivers`,
    img: "/img/ptl.jpg",
    buttonText: "Express PTL",
  },
  {
    title: "3Pl",
    desc: `Associated Road Carriers excels in providing top-notch third-party logistics (3PL) services. As experts in the field, they seamlessly integrate into supply chains, offering comprehensive solutions for efficient warehousing, transportation, and distribution.`,
    img: "/img/rail.jpg",
    buttonText: "Rail services",
  },
  {
    title: "Express - PTL",
    desc: `Associated Road Carriers positions as a leading provider of part truckload (PTL) services, prioritizing the secure and transparent transportation of goods. Managing a fleet of 6,000+ GPS-enabled vehicles operated by trained drivers`,
    img: "/img/ptl.jpg",
    buttonText: "Express PTL",
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
                  <button className="bg-red hover:bg-red/80 text-white px-6 py-2 text-sm rounded-full">
                    {card.buttonText}
                  </button>
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
