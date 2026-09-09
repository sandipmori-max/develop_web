import React, { useEffect, useState } from "react";
import "./ClientTestimonials.css";

const testimonials = [
  {
    quote:
      "I would like to express my sincere thanks for your contributions to our successful implementation of the Our AAC ERP project. I look forward to the opportunity to work together again.",
    name: "MR. BHUMIN PATEL",
    position: "Director, BRIXO INDUSTRIES - KADI",
  },
  {
    quote:
      "I just wanted to drop you a note to thank you for all the great work your firm did for us, timely implementation and one to one support. The ERP solution is working flawlessly. All our branches and departments are connected on a central system and now we have a complete control on our business.Once again thanks for the team for a great job. Finally, keep doing what you do – offering great quality.",
    name: "Bhavesh B Bhadari",
    position:
      "Managing Director, RITE ZONE CHEMICALS INDIA PVT. LTD",
  },
];

const ClientTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="client-testimonials">
      {/* Background */}
      <div className="client-testimonials-bg">
        <img
          src="./CMSassets/images/it_service/800.jpg"
          alt=""
        />
      </div>

      <div className="client-testimonials-overlay" />

      <div className="client-testimonials-container">
        {/* Header */}
        <div className="client-testimonials-header">
          <div className="client-testimonials-heading">
            <span className="client-testimonials-eyebrow">
              CLIENT STORIES
            </span>

            <h2>What Our Clients Say?</h2>

            <p>
              We pride ourselves on providing an exceptional service to our
              <br className="desktop-break" />
              clients and continuously work to serve them better.
            </p>
          </div>

          <div className="client-testimonials-count">
            <span>0{activeIndex + 1}</span>
            <i>/</i>
            <span>0{testimonials.length}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="client-testimonials-content">
          <div className="client-testimonial-main">
            {/* Quote Icon */}
            <div className="testimonial-quote-mark">“</div>

            {/* Testimonial */}
            <div className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className={`testimonial-card ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <div className="testimonial-content">
                    "{testimonial.quote}"
                  </div>

                  <div className="testimonial-author">
                    <div className="testimonial-photo">
                      <img
                        src="CMSassets/images/it_service/User-Icon.jpg"
                        alt={testimonial.name}
                      />
                    </div>

                    <div className="testimonial-meta">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Controls */}
            <div className="testimonial-controls">
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`testimonial-dot ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span />
                  </button>
                ))}
              </div>

              <div className="testimonial-arrows">
                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Side */}
          <div className="client-testimonials-side">
            <div className="testimonial-side-card">
              <span className="side-card-number">01</span>

              <div className="side-card-line" />

              <p>
                Trusted relationships.
                <br />
                Real business impact.
              </p>

              <div className="side-card-symbol">+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;