import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import logo from "../../assets/Images/1.jpg";

const cardData = [
  {
    title: "Express - FTL",
    img: "/img/speed-trucking.jpg",
  },
  {
    title: "Warehouse",
    img: "/img/warehouse.jpg",
  },
  {
    title: "3Pl",
    img: "/img/rail.jpg",
  },
  {
    title: "Express - PTL",
    img: "/img/ptl.jpg",
  },
  {
    title: "3Pl",
    img: "/img/rail.jpg",
  },
  {
    title: "Express - PTL",
    img: "/img/ptl.jpg",
  },
  {
    title: "Express - PTL",
    img: "/img/ptl.jpg",
  },
  {
    title: "3Pl",
    img: "/img/rail.jpg",
  },
  {
    title: "Express - PTL",
    img: "/img/ptl.jpg",
  },
];

const ClientsLogoSection = () => {
  return (
    <div className="py-10   w-full mx-auto p-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsLogoSection;
