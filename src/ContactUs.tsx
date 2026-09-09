import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <> 

      {/* =====================================================
          HERO / INNER BANNER
      ====================================================== */}
      <section className="contact-hero">
        <div className="contact-hero-image">
          <img
            src="./CMSassets/images/it_service/contactus.png"
            alt="Contact DevERP"
          />
        </div>

        <div className="contact-hero-overlay" />

        <div className="contact-container">
          <div className="contact-hero-content">

            <span className="contact-hero-label">
              GET IN TOUCH
            </span>

            <h1>CONTACT US</h1>

            <p>
              Let's discuss how DevERP can help transform
              your business with smarter technology solutions.
            </p>

            <div className="contact-breadcrumb">
              <button
                type="button"
                onClick={() => navigate("/")}
              >
                Home
              </button>

              <span>/</span>

              <strong>Contact Us</strong>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="contact-intro">

        <div className="contact-container">

          <div className="contact-intro-grid">

            <div className="contact-intro-left">

              <span className="contact-section-label">
                TALK TO DEV​ERP
              </span>

              <h2>
                Let's build something
                <span> better together.</span>
              </h2>

            </div>

            <div className="contact-intro-right">

              <p>
                Whether you are looking for a complete ERP solution,
                customized software, mobile application or business
                technology services, our team is here to help.
              </p>

              <p>
                Tell us about your requirements and our experts
                will get back to you with the right solution.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}
      <section className="contact-details">

        <div className="contact-container">

          <div className="contact-details-grid">

            {/* INDIA */}
            <div className="contact-info-card">

              <div className="contact-card-icon">
                <span>⌖</span>
              </div>

              <div className="contact-card-content">

                <span className="contact-card-label">
                  OUR OFFICE
                </span>

                <h3>India</h3>

                <p>
                  405, 407B Primate Complex,
                  <br />
                  Opp. Gormoh Hotel,
                  <br />
                  Nr. Judges Bunglow Cross Road,
                  <br />
                  Bodakdev, Ahmedabad-380054.
                  <br />
                  Gujarat, India.
                </p>

                <a href="mailto:admin@deverp.com">
                  admin@deverp.com
                </a>

                <a href="tel:07935312554">
                  079 3531 2554 (30 Lines)
                </a>

                <a href="tel:+919327940159">
                  +91 93279 40159
                </a>

              </div>

            </div>

            {/* UAE */}
            <div className="contact-info-card">

              <div className="contact-card-icon">
                <span>⌖</span>
              </div>

              <div className="contact-card-content">

                <span className="contact-card-label">
                  OUR OFFICE
                </span>

                <h3>United Arab Emirates</h3>

                <p>
                  FDCW1699, Compass Building,
                  <br />
                  Al Sahada Road,
                  <br />
                  Al Hamara Industrial zone-FZ,
                  <br />
                  Ras Al Khaimah,
                  <br />
                  United Arab Emirates.
                </p>

                <a href="mailto:sales@deverp.com">
                  sales@deverp.com
                </a>

                <a href="tel:+971561612075">
                  +971 56 161 2075
                </a>

              </div>

            </div>

            {/* EMAIL / SALES */}
            <div className="contact-info-card">

              <div className="contact-card-icon">
                <span>✉</span>
              </div>

              <div className="contact-card-content">

                <span className="contact-card-label">
                  SALES & SUPPORT
                </span>

                <h3>Let's talk</h3>

                <p>
                  Have a project in mind or need help
                  selecting the right ERP solution?
                </p>

                <a href="mailto:mkt@deverp.com">
                  mkt@deverp.com
                </a>

                <a href="mailto:suppprt@deverp.com">
                  suppprt@deverp.com
                </a>

                <a href="tel:+918818812554">
                  +91 88188 12554
                </a>

                <a href="tel:+919904083255">
                  +91 99040 83255
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT FORM + IMAGE
      ====================================================== */}
      <section className="contact-form-section">

        <div className="contact-container">

          <div className="contact-form-layout">

            {/* LEFT IMAGE */}
            <div className="contact-form-visual">

              <img
                src="./CMSassets/images/it_service/contactus.png"
                alt="Contact DevERP"
              />

              <div className="contact-form-visual-overlay" />

              <div className="contact-form-visual-content">

                <span>
                  DEV​ERP SOLUTIONS
                </span>

                <h2>
                  Your business.
                  <br />
                  Our technology.
                </h2>

                <p>
                  Customized enterprise solutions designed
                  around the way your business works.
                </p>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="contact-form-wrapper">

              <div className="contact-form-heading">

                <span>
                  SEND US A MESSAGE
                </span>

                <h2>
                  How can we help?
                </h2>

                <p>
                  Fill out the form and our team will get
                  in touch with you.
                </p>

              </div>

              <form className="contact-form">

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="firstName">
                      First Name <span>*</span>
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="lastName">
                      Last Name <span>*</span>
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter last name"
                    />
                  </div>

                </div>

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="email">
                      Your Email <span>*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="phone">
                      Your Phone Number <span>*</span>
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                    />
                  </div>

                </div>

                <div className="contact-field">

                  <label htmlFor="business">
                    Business Name <span>*</span>
                  </label>

                  <input
                    id="business"
                    type="text"
                    placeholder="Enter business name"
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="subject">
                    Subject <span>*</span>
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="description">
                    Description
                  </label>

                  <textarea
                    id="description"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                  />

                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  SUBMIT NOW
                  <span>↗</span>
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    
 
    </>
  );
};

export default ContactUs;