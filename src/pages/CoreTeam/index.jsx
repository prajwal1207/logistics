import React from "react";
import cover from "../../assets/Images/1.jpg";
import { FaLinkedin } from "react-icons/fa";

// Team Card
const TeamCard = ({ member }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 text-center w-full max-w-sm mx-auto">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-60 object-cover"
      />
      <div className="mt-4 px-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          {member.name}
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          {member.designation}
        </p>
        <div className="mt-4 mb-6 flex justify-center py-6">
          <a
            href={member.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-xl transition-colors"
          >
            <FaLinkedin size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Team Data
const coreTeamData = [
  {
    name: "Anil Kumar",
    designation: "Founder & CEO",
    image: cover,
    linkedin: "https://www.linkedin.com/in/anilkumar",
  },
  {
    name: "Priya Sharma",
    designation: "Chief Operating Officer",
    image: cover,
    linkedin: "https://www.linkedin.com/in/priyasharma",
  },
  {
    name: "Rohit Mehta",
    designation: "Chief Technology Officer",
    image: cover,
    linkedin: "https://www.linkedin.com/in/rohitmehta",
  },
  {
    name: "Sneha Verma",
    designation: "Head of Logistics",
    image: cover,
    linkedin: "https://www.linkedin.com/in/snehaverma",
  },
  {
    name: "Karan Patel",
    designation: "Chief Financial Officer",
    image: cover,
    linkedin: "https://www.linkedin.com/in/karanpatel",
  },
  {
    name: "Karan Patel",
    designation: "Chief Financial Officer",
    image: cover,
    linkedin: "https://www.linkedin.com/in/karanpatel",
  },
];

// Page Component
const CoreTeamPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh]">
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center px-4 sm:px-8 md:px-24">
          <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold leading-snug">
            Meet the Powerhouse <br /> Behind Our Vision
          </h1>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-7xl w-full text-left flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-red font-bold">
            Core Team
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>
          <p className="text-base sm:text-lg">
            In the visionary landscape of Adhunik Transport Services, the key individuals
            serve as the captains steering our company’s ship to success. With
            our wealth of experience and expertise, we contribute smart ideas to
            ensure our organization remains at the forefront of delivering
            exceptional services. Working collaboratively, we promote a positive
            workplace environment and inspire all our employees to perform at
            their best. Each team member brings unique skills to the table,
            collectively making Adhunik Transport Services an excellent workplace.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {coreTeamData.map((member, indx) => (
              <TeamCard key={indx} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreTeamPage;
