import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { SiComma } from "react-icons/si";

import logo from "../../assets/Images/1.jpg";

const testimonialData = [
  {
    clientName: "Rajeev Mehta",
    testimonial:
      "Their express freight services are unmatched. Super quick and very professional. Highly recommend!",
  },
  {
    clientName: "Priya Khanna",
    testimonial:
      "Reliable warehousing with top-notch security and easy access. Our goods have always been safe.",
  },
  {
    clientName: "Ankit Verma",
    testimonial:
      "The 3PL service streamlined our logistics completely. It's like having our own supply chain team.",
  },
  {
    clientName: "Sneha Rao",
    testimonial:
      "PTL deliveries have been smooth and on-time. I’m really impressed by their consistency.",
  },
  {
    clientName: "Vikram Patel",
    testimonial:
      "Excellent communication and service from their 3PL team. They understand our needs well.",
  },
  {
    clientName: "Neha Sharma",
    testimonial:
      "Very responsive team and reliable delivery. We’ve seen a big improvement in operations.",
  },
  {
    clientName: "Arjun Desai",
    testimonial:
      "Fast, safe, and professional—three words I’d use for their PTL service.",
  },
  {
    clientName: "Ishita Bansal",
    testimonial:
      "Thanks to their 3PL solutions, we’ve optimized cost and time drastically.",
  },
  {
    clientName: "Karan Malhotra",
    testimonial:
      "Their PTL service helps us meet tight deadlines without stress. Truly dependable.",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="  w-full mx-auto p-6 md:p-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="px-4"
      >
        {testimonialData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full p-8 m-4 rounded-lg ">
              <div className=" flex items-center justify-center py-6 text-gray-400">
                <SiComma size="4rem" />
                <SiComma size="4rem" />
              </div>

              <p className="text-xl">{card.testimonial}</p>
              <p className="text-2xl  font-bold py-10 text-red">
                {card.clientName}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
