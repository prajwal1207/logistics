

import React, { useState } from "react";
import cover from "../../assets/Images/1.jpg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const SHEETDB_API = "https://sheetdb.io/api/v1/dybxjbes8f9o9";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString("en-GB");
    return { date, time };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { date, time } = getCurrentDateTime();

    const payload = {
      data: {
        ...formData,
        date,
        time,
      },
    };

    try {
      const response = await fetch(process.env.SHEETDB_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Show the success message...
        setSubmitted(true);
        // ...and hide it after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);

        // Reset form fields
        setFormData({
          name: "",
          email: "",
          contact: "",
          query: "",
          message: "",
        });
      } else {
        console.error("SheetDB submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12 md:px-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Connect with Us: Your <br />
            Gateway to Seamless <br />
            Logistics Solutions <br />
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 text-lg text-gray-800">
            <h2 className="text-2xl font-bold text-red">Get in Touch</h2>
            <p className="text-l text-red">HEAD OFFICE</p>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=00+A.+B.+Road,+Dewas+Naka,+Indore+(M.P.)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-red transition-transform hover:scale-105"
              >
                <FaMapMarkerAlt className="text-xl" />
                00 A. B. Road, Dewas Naka, Indore (M.P.)
              </a>
              <a
                href="mailto:yourmail@example.com"
                className="flex items-center gap-3 text-gray-700 hover:text-red transition-transform hover:scale-105"
              >
                <FaEnvelope className="text-xl" />
                adhuniktpt1989@gmail.com
              </a>
              <a
                href="tel:0731 4023738"
                className="flex items-center gap-3 text-gray-700 hover:text-red transition-transform hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                0731 4023738
              </a>
              <a
                href="https://wa.me/7000448907"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-red transition-transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Query Type (e.g. Logistics, Support)"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded col-span-1 sm:col-span-2 h-32 resize-none"
              required
            />
            <button
              type="submit"
              className="bg-red text-white py-3 rounded font-semibold col-span-1 sm:col-span-2 hover:bg-red-600 transition"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-green-600 font-medium col-span-1 sm:col-span-2">
                Thank you! Your message has been submitted.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;


