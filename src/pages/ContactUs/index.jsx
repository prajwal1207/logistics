import React, { useState } from "react";
import cover from "../../assets/Images/1.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  // const SHEETDB_API = "https://sheetdb.io/api/v1/dybxjbes8f9o9";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
    const time = now.toLocaleTimeString("en-GB"); // Format: HH:MM:SS
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
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
        <div className="max-w-5xl w-full text-left flex flex-col gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl text-red font-bold">
              Contact Us
            </h1>
            <div className="h-[2px] w-20 bg-red my-2"></div>
            <p className="text-base sm:text-lg leading-relaxed">
              Do you have any queries or need more information? Let us know how
              we can help you; our dedicated team is constantly working to
              answer and resolve your queries.
            </p>
          </div>

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
            ></textarea>

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
