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

  <div className="contact-container contact-hero-grid">
    <div className="contact-hero-content">

      <div className="contact-hero-label">
        <span></span>
        GET IN TOUCH
      </div>

      <h1>
        CONTACT US<span>.</span>
      </h1>

      <p>
        Let's discuss how DevERP can help transform
        your business with smarter technology solutions.
      </p>

      <div className="clients-hero-bottom">

        <div className="clients-breadcrumb">
          <a href="/">
            Home
          </a>

          <span>→</span>

          <strong>Contact Us</strong>
        </div>

        <div className="clients-hero-explore">
          <span />
          EXPLORE OUR Blogs
        </div>

      </div>

    </div>

    <div className="contact-hero-visual" aria-hidden="true">

      <div className="contact-orbit contact-orbit-one"></div>
      <div className="contact-orbit contact-orbit-two"></div>
      <div className="contact-orbit contact-orbit-three"></div>

      <div className="contact-orbit-center">
        <span>01</span>
        <small>CONTACT</small>
      </div>

      <div className="contact-vertical-text">
        DEV ERP SOLUTIONS
      </div>

    </div>
  </div>

  <div className="contact-hero-bottom">
    <span>CONNECT</span>
    <span>COLLABORATE</span>
    <span>GROW</span>
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

    <div className="contact-details-heading">
      <div className="contact-section-label">
        <span></span>
        OUR LOCATIONS
      </div>

      <h2>
        Let’s <span>connect.</span>
      </h2>

      <p>
        Reach out to our teams across India and the UAE,
        or connect with our sales and support team.
      </p>
    </div>

    <div className="contact-details-grid">

      {/* INDIA */}
      <div className="contact-info-card">

        <div className="contact-card-top">
          <div className="contact-card-icon">
            <span>⌖</span>
          </div>

          <span className="contact-card-number">
            01
          </span>
        </div>

        <div className="contact-card-content">

          <span className="contact-card-label">
            OUR OFFICE
          </span>

          <h3>India</h3>

          <div className="contact-card-line"></div>

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

          <div className="contact-card-links">

            <a href="mailto:admin@deverp.com">
              <span>✉</span>
              admin@deverp.com
            </a>

            <a href="tel:07935312554">
              <span>☎</span>
              079 3531 2554 (30 Lines)
            </a>

            <a href="tel:+919327940159">
              <span>☎</span>
              +91 93279 40159
            </a>

          </div>

        </div>

      </div>


      {/* UAE */}
      <div className="contact-info-card">

        <div className="contact-card-top">
          <div className="contact-card-icon">
            <span>⌖</span>
          </div>

          <span className="contact-card-number">
            02
          </span>
        </div>

        <div className="contact-card-content">

          <span className="contact-card-label">
            OUR OFFICE
          </span>

          <h3>United Arab Emirates</h3>

          <div className="contact-card-line"></div>

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

          <div className="contact-card-links">

            <a href="mailto:sales@deverp.com">
              <span>✉</span>
              sales@deverp.com
            </a>

            <a href="tel:+971561612075">
              <span>☎</span>
              +971 56 161 2075
            </a>

          </div>

        </div>

      </div>


      {/* SALES & SUPPORT */}
      <div className="contact-info-card contact-info-card-highlight">

        <div className="contact-card-top">
          <div className="contact-card-icon">
            <span>✉</span>
          </div>

          <span className="contact-card-number">
            03
          </span>
        </div>

        <div className="contact-card-content">

          <span className="contact-card-label">
            SALES & SUPPORT
          </span>

          <h3>Let’s talk</h3>

          <div className="contact-card-line"></div>

          <p>
            Have a project in mind or need help
            selecting the right ERP solution?
          </p>

          <div className="contact-card-links">

            <a href="mailto:mkt@deverp.com">
              <span>✉</span>
              mkt@deverp.com
            </a>

            <a href="mailto:suppprt@deverp.com">
              <span>✉</span>
              suppprt@deverp.com
            </a>

            <a href="tel:+918818812554">
              <span>☎</span>
              +91 88188 12554
            </a>

            <a href="tel:+919904083255">
              <span>☎</span>
              +91 99040 83255
            </a>

          </div>

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