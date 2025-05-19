import React from "react";

const ContactDetails = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#0A2647] mb-6">Get In Touch</h2>
      <div className="h-1 w-20 bg-[#FFB800] mb-8"></div>
      <div className="space-y-6">
        <Detail icon="map-marker-alt" title="Our Location">
          123 Construction Ave, Building District, City, 12345
        </Detail>
        <Detail icon="phone" title="Phone Number">
          +974 3367 7921
        </Detail>
        <Detail icon="envelope" title="Email Address">
          info@artqatar.com
        </Detail>
        <Detail icon="clock" title="Working Hours">
          Monday - Friday: 8:00 AM - 6:00 PM
        </Detail>
      </div>
    </div>
  );
};

function Detail({ icon, title, children }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-[#FFB800] mt-1">
        <i className={`fas fa-${icon} text-2xl`}></i>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#0A2647] mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
}

export default ContactDetails;
