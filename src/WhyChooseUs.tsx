import React from "react";
import "./WhyChooseUs.css";

interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
  number: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: "CMSassets/images/it_service/i1.png",
    title: "Free Online Demo",
    description:
      "We provide free Demo service that will give you a first-hand view of our products and services.",
    number: "01",
  },
  {
    icon: "CMSassets/images/it_service/i2.png",
    title: "Top Technological Tools",
    description:
      "All our products are designed and developed with advanced technological tools.",
    number: "02",
  },
  {
    icon: "CMSassets/images/it_service/i3.png",
    title: "Creative & Innovative Solutions",
    description:
      "We will consult the best for you, based on your requirements with creative & innovative solutions.",
    number: "03",
  },
  {
    icon: "CMSassets/images/it_service/i4.png",
    title: "Best Service and Ease of Work",
    description:
      "At DevERP, our chief objective is to provide top-notch services to our customers.",
    number: "04",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-section">

      <div className="why-choose-container">

        {/* Heading */}
        <div className="why-choose-heading scroll-reveal">

          <span className="why-choose-eyebrow">
            WHY DEVERP
          </span>

          <h2>
            Why Choose <span>Us?</span>
          </h2>

          <p>
            We take pride in the solutions we deliver!
          </p>

        </div>


        {/* Cards */}
        <div className="why-choose-grid">

          {whyChooseItems.map((item, index) => (
            <div
              className={`
                why-choose-card
                scroll-reveal
                scroll-reveal-delay-${Math.min(index + 1, 5)}
              `}
              key={item.number}
            >

              {/* Number */}
              <div className="why-choose-number">
                {item.number}
              </div>


              {/* Icon */}
              <div className="why-choose-icon-wrapper">

                <div className="why-choose-icon">

                  <img
                    src={item.icon}
                    alt={item.title}
                  />

                </div>

              </div>


              {/* Content */}
              <div className="why-choose-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>


              {/* Bottom Arrow */}
              <div className="why-choose-arrow">

                <span>
                  →
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;