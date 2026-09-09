import React from "react";
import "./ServicesOffer.css";

interface ServiceItem {
  icon: string;
  title: string;
  number: string;
}

const services: ServiceItem[] = [
  {
    icon: "CMSassets/images/it_service/si1.png",
    title: "Fast and Reliable Services",
    number: "01",
  },
  {
    icon: "CMSassets/images/it_service/si2.png",
    title: "Customized ERP Services",
    number: "02",
  },
  {
    icon: "CMSassets/images/it_service/si3.png",
    title: "Cloud Backup and Data Export",
    number: "03",
  },
  {
    icon: "CMSassets/images/it_service/si4.png",
    title: "Web Design and Development",
    number: "04",
  },
  {
    icon: "CMSassets/images/it_service/si5.png",
    title: "Mobile App Development",
    number: "05",
  },
  {
    icon: "CMSassets/images/it_service/si6.png",
    title: "Email, Hosting and SMS Services",
    number: "06",
  },
];

const ServicesOffer: React.FC = () => {
  return (
    <section className="services-offer-section">
      <div className="services-offer-container">

        {/* Section Heading */}
        <div className="services-offer-heading">
          <span className="services-offer-eyebrow">
            WHAT WE DO
          </span>

          <h2>
            Services <span>We Offer</span>
          </h2>

          <p>
            Complete end-to-end business automation and technology
            services to streamline your Business!
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-offer-grid">
          {services.map((service) => (
            <div
              className="service-offer-card"
              key={service.number}
            >
              {/* Number */}
              <div className="service-offer-number">
                {service.number}
              </div>

              {/* Icon */}
              <div className="service-offer-icon">
                <img
                  src={service.icon}
                  alt={service.title}
                />
              </div>

              {/* Content */}
              <div className="service-offer-content">
                <h3>{service.title}</h3>

                <div className="service-offer-line" />
              </div>

              {/* Arrow */}
              <div className="service-offer-arrow">
                →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOffer;