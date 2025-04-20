import React from "react";

const PrivacyPage = () => {
  return (
    <div>
      {/* Privacy Policy Section */}
      <section className="flex justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl w-full text-left flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl text-red font-bold">
            Privacy Policy
          </h1>
          <div className="h-[2px] w-20 bg-red"></div>

          <p className="text-base sm:text-lg leading-relaxed">
            At <strong>Adhunik Transport Services</strong>, we respect the
            privacy of every individual who visits our website. We are committed
            to protecting and safeguarding the personal information of all our
            visitors and users.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            By accessing or using our website, you consent to our Privacy Policy
            and agree to its terms.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Our website provides users with access to a variety of
            logistics-related services, including Shipment Tracking, Pickup
            Requests, Network Details, Service Offerings, Pin Code Coverage,
            POD, Shipment Reports, and more. As we grow,{" "}
            <strong>Adhunik Transport Services</strong> may introduce additional
            features to further enhance the customer experience.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Some features of the website—such as “Shipment Tracking”—may require
            users to input a tracking ID or registration credentials. Any data
            collected from registered users is used strictly for internal
            purposes and may be used to support{" "}
            <strong>Adhunik Transport Services’</strong> marketing or customer
            service initiatives.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Except where stated in this policy,{" "}
            <strong>Adhunik Transport Services</strong> will not share, sell, or
            distribute any personally identifiable information without user
            consent—unless required by law or when we believe it is necessary to
            protect our rights, property, or the safety of our users and
            organization.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            <strong>Adhunik Transport Services</strong> reserves the right to
            modify, amend, or update this Privacy Policy at any time without
            prior notice. We encourage you to periodically review this policy to
            stay informed about how we are protecting your information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
