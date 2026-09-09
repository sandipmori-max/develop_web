import React, { useEffect, useState } from "react";
import "./AboutUs.css";

interface AboutUsProps {
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

const AboutUs: React.FC<AboutUsProps> = ({ setShow }) => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    subject: "",
    description: "",
  });

  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openAppointment = () => {
    if (setShow) {
      setShow(true);
    } else {
      setShowModal(true);
    }
  };

  const closeAppointment = () => {
    if (setShow) {
      setShow(false);
    }

    setShowModal(false);
    setValidationMessage("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.businessName ||
      !formData.subject
    ) {
      setValidationMessage("Please fill all required fields.");
      return;
    }

    setValidationMessage(
      "Thank You! We will contact you shortly..."
    );
  };

  return (
    <>
      {/* =========================================
          ABOUT HERO
      ========================================= */}
      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="about-container about-hero-content">
          <div className="about-hero-badge">
            <span />
            DEVErp SOLUTIONS
          </div>

          <h1>ABOUT US</h1>

          <p>
            Building smarter businesses through technology,
            innovation and intelligent ERP solutions.
          </p>
        </div>
      </section>

      {/* =========================================
          INTRO SECTION
      ========================================= */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-kicker">WHO WE ARE</span>

            <h2>
              WE WIN
              <span> WHEN YOU WIN</span>
            </h2>

            <p>
              Improving business efficiencies is our priority!
            </p>
          </div>

          <div className="about-main-grid">
            {/* LEFT CONTENT */}
            <div className="about-content">
              <div className="about-content-label">
                <span className="about-line" />
                About DevERP
              </div>

              <h3>
                Technology that works
                <br />
                <span>for your business.</span>
              </h3>

              <p>
                <strong>DevERP Solutions Private Limited</strong> is a
                custom software development firm located in Ahmedabad,
                India. We have been providing, implementing, and
                customizing our ERP software for various businesses in
                the last <strong>16 years.</strong> We also offer custom
                software programming services such as{" "}
                <strong>
                  ERP Solutions, Web and Mobile Application Development,
                </strong>{" "}
                Cloud Solutions, Website Hosting &amp; Designing,
                Technology Consulting, Quality Assurance and much more.
              </p>

              <p>
                We develop the <strong>software solution</strong> in
                Microsoft Technologies. Also, .NET and advanced
                technologies such as data connectors, security, cultural
                and date management objects are there to help with
                development.
              </p>

              <p>
                <strong>Software development is the key to success</strong>{" "}
                in this highly competitive world of business. Our company
                has highly qualified and experienced team of software
                professionals with varied domain knowledge and expertise
                to provide cutting edge solutions within a timeline. We
                take pride in delivering customized and next-generation
                enterprise solutions based on your business needs.
              </p>

              {/* VALUES */}
              <div className="about-values">
                <div className="about-values-heading">
                  <span>OUR VALUES</span>
                  <h4>Our Actions Driven By Values</h4>
                </div>

                <div className="about-values-grid">
                  <div className="about-value-card">
                    <div className="about-value-number">01</div>
                    <div>
                      <strong>Integrity</strong>
                      <span>Doing what is right.</span>
                    </div>
                  </div>

                  <div className="about-value-card">
                    <div className="about-value-number">02</div>
                    <div>
                      <strong>Commitment</strong>
                      <span>Delivering what we promise.</span>
                    </div>
                  </div>

                  <div className="about-value-card">
                    <div className="about-value-number">03</div>
                    <div>
                      <strong>Excellence</strong>
                      <span>Always improving our work.</span>
                    </div>
                  </div>

                  <div className="about-value-card">
                    <div className="about-value-number">04</div>
                    <div>
                      <strong>Transparency</strong>
                      <span>Building trust through openness.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="about-image-area">
              <div className="about-image-decoration about-decoration-one" />
              <div className="about-image-decoration about-decoration-two" />

              <div className="about-image-card">
                <img
                  src="https://deverp.com/CMSassets/images/it_service/adult-composition-corporate-attire-959816.jpg"
                  alt="DevERP team and technology"
                />

                <div className="about-image-overlay">
                  <div className="about-image-stat">
                    <strong>16+</strong>
                    <span>Years of<br />Experience</span>
                  </div>

                  <div className="about-image-stat">
                    <strong>ERP</strong>
                    <span>Business<br />Solutions</span>
                  </div>
                </div>
              </div>

              <div className="about-floating-card">
                <span className="about-floating-icon">✦</span>

                <div>
                  <strong>Next-Generation</strong>
                  <span>Enterprise Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          EXPERIENCE STRIP
      ========================================= */}
      <section className="about-experience">
        <div className="about-container">
          <div className="about-experience-grid">
            <div className="about-experience-item">
              <strong>16+</strong>
              <span>Years Experience</span>
            </div>

            <div className="about-experience-item">
              <strong>ERP</strong>
              <span>Industry Solutions</span>
            </div>

            <div className="about-experience-item">
              <strong>360°</strong>
              <span>Technology Services</span>
            </div>

            <div className="about-experience-item">
              <strong>24/7</strong>
              <span>Business Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}
      <section className="about-cta">
        <div className="about-cta-glow" />

        <div className="about-container about-cta-inner">
          <div>
            <span className="about-kicker about-kicker-light">
              LET'S BUILD TOGETHER
            </span>

            <h2>
              Ready to make your
              <br />
              business <span>smarter?</span>
            </h2>

            <p>
              Let's discuss your business requirements and create
              technology that actually works for you.
            </p>
          </div>

          <button
            type="button"
            className="about-cta-button"
            onClick={openAppointment}
          >
            <span>Schedule Appointment</span>
            <span className="about-cta-arrow">↗</span>
          </button>
        </div>
      </section>

      {/* =========================================
          APPOINTMENT MODAL
      ========================================= */}
      {showModal && !setShow && (
        <div
          className="appointment-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeAppointment();
            }
          }}
        >
          <div className="appointment-modal">
            <button
              type="button"
              className="appointment-close"
              onClick={closeAppointment}
              aria-label="Close"
            >
              ×
            </button>

            <div className="appointment-header">
              <span className="about-kicker">GET IN TOUCH</span>

              <h2>Schedule Appointment</h2>

              <p>
                Tell us about your business and our team will get
                back to you shortly.
              </p>
            </div>

            <form
              className="appointment-form"
              onSubmit={handleSubmit}
            >
              <div className="appointment-form-grid">
                <div className="appointment-field">
                  <label>First Name*</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="appointment-field">
                  <label>Last Name*</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="appointment-field">
                  <label>Your Email*</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="appointment-field">
                  <label>Your Phone Number*</label>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Your Phone Number*"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>

                <div className="appointment-field appointment-full">
                  <label>Business Name*</label>
                  <input
                    name="businessName"
                    type="text"
                    placeholder="Business Name*"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>

                <div className="appointment-field appointment-full">
                  <label>Subject*</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="appointment-field appointment-full">
                  <label>Description</label>
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {validationMessage && (
                <div
                  className={
                    validationMessage.startsWith("Thank")
                      ? "appointment-success"
                      : "appointment-error"
                  }
                >
                  {validationMessage}
                </div>
              )}

              <div className="appointment-actions">
                <button
                  type="submit"
                  className="appointment-submit"
                >
                  SUBMIT NOW
                  <span>↗</span>
                </button>

                <button
                  type="button"
                  className="appointment-cancel"
                  onClick={closeAppointment}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;