import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const currentYear = new Date().getFullYear();

  const handleSubscribe = () => {
    const emailPattern =
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank You! We will contact you shortly...");
    setEmail("");
  };

  const goTo = (path: string) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="de-footer">

      {/* =====================================================
          TOP FOOTER
      ====================================================== */}
      <div className="de-footer-top">

        <div className="de-footer-container">

          <div className="de-footer-topline de-footer-reveal-up">

            <div>
              <span className="de-footer-eyebrow">
                DEV.ERP SOLUTIONS
              </span>

              <h2>
                Building smarter businesses
                <span> with technology.</span>
              </h2>
            </div>

            <div className="de-footer-topline-arrow">
              ↗
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="de-footer-main">

        <div className="de-footer-container">

          <div className="de-footer-grid">

            {/* COMPANY */}
            <div className="de-footer-company de-footer-slide-left">

              <button
                type="button"
                className="de-footer-logo"
                onClick={() => goTo("/")}
                aria-label="DevERP Home"
              >
                <img
                  src="CMSassets/images/logos/logo.png"
                  alt="DevERP"
                />
              </button>

              <p className="de-footer-description">
                DevERP Solutions Private Limited. is a custom
                software development firm located in Ahmedabad,
                India. We offer custom software programming
                services, from offshore software development
                to technology consulting.
              </p>

              <p className="de-footer-description">
                We take pride in delivering customized and
                next-generation enterprise solutions based on
                your business needs.
              </p>

              <div className="de-footer-social-title">
                Follow our journey
              </div>

              <div className="de-footer-social">

                <a
                  href="https://www.facebook.com/Deverp-Solutions-Pvt-Ltd-102329981645556/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="https://twitter.com/DevERP5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  𝕏
                </a>

                <a
                  href="https://www.linkedin.com/in/deverp-solutions-pvt-ltd-company-286598181"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://www.instagram.com/deverp001/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  ◎
                </a>

              </div>

            </div>


            {/* QUICK LINKS */}
            <div className="de-footer-column de-footer-column-reveal de-footer-delay-1">

              <div className="de-footer-column-number">
                01
              </div>

              <h3>
                Explore
              </h3>

              <ul>

                <li>
                  <button
                    type="button"
                    onClick={() => goTo("/")}
                  >
                    <span>↗</span>
                    Home
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => goTo("/about")}
                  >
                    <span>↗</span>
                    About Us
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => goTo("/clients")}
                  >
                    <span>↗</span>
                    Clients
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => goTo("/career")}
                  >
                    <span>↗</span>
                    Career
                  </button>
                </li>

                <li>
                  <a href="index.aspx?q=service_list">
                    <span>↗</span>
                    Services
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=contact_us">
                    <span>↗</span>
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=deverp_privacy_policy">
                    <span>↗</span>
                    Privacy Policy
                  </a>
                </li>

              </ul>

            </div>


            {/* PRODUCTS */}
            <div className="de-footer-column de-footer-column-reveal de-footer-delay-2">

              <div className="de-footer-column-number">
                02
              </div>

              <h3>
                Products
              </h3>

              <ul>

                <li>
                  <a href="index.aspx?q=ready_mix_concrete_erp">
                    <span>↗</span>
                    Ready Mix Concrete ERP
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=real_estate_erp">
                    <span>↗</span>
                    Real Estate ERP
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=engraving_erp">
                    <span>↗</span>
                    Engraving ERP
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=flexo_printing_erp">
                    <span>↗</span>
                    Flexo Printing ERP
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=light_weight_block_erp">
                    <span>↗</span>
                    Light Weight Block (AAC) ERP
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=rice_mill_erp">
                    <span>↗</span>
                    Pulse / Rice Mill ERP
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=school_management_erp">
                    <span>↗</span>
                    School Management ERP
                  </a>
                </li>

                <li>
                  <a href="index.aspx?q=trading_erp">
                    <span>↗</span>
                    Trading ERP
                  </a>
                </li>

              </ul>

            </div>


            {/* CONTACT */}
            <div className="de-footer-contact de-footer-column-reveal de-footer-delay-3">

              <div className="de-footer-column-number">
                03
              </div>

              <h3>
                Contact
              </h3>


              {/* INDIA */}
              <div className="de-footer-contact-card">

                <div className="de-footer-country">

                  <span className="de-country-indicator">
                    IN
                  </span>

                  <span>
                    India
                  </span>

                </div>

                <p>
                  405, 407B Primate Complex,
                  <br />
                  Opp. Gormoh Hotel, Nr. Judges
                  <br />
                  Bunglow Cross Road, Bodakdev,
                  <br />
                  Ahmedabad-380054, Gujarat, India.
                </p>

                <div className="de-footer-contact-links">

                  <a href="mailto:admin@deverp.com">
                    admin@deverp.com
                  </a>

                  <a href="mailto:suppprt@deverp.com">
                    Support: suppprt@deverp.com
                  </a>

                  <a href="tel:07935312554">
                    079 3531 2554 (30 Lines)
                  </a>

                  <a href="tel:+919327940159">
                    +91 93279 40159
                  </a>

                  <a href="mailto:mkt@deverp.com">
                    Sales: mkt@deverp.com
                  </a>

                  <a href="tel:+918818812554">
                    +91 88188 12554
                  </a>

                  <a href="tel:+919904083255">
                    +91 99040 83255
                  </a>

                </div>

              </div>


              {/* UAE */}
              <div className="de-footer-contact-card">

                <div className="de-footer-country">

                  <span className="de-country-indicator">
                    AE
                  </span>

                  <span>
                    UAE
                  </span>

                </div>

                <p>
                  FDCW1699, Compass Building,
                  <br />
                  Al Sahada Road, Al Hamara
                  <br />
                  Industrial zone-FZ,
                  <br />
                  Ras Al Khaimah, United Arab Emirates.
                </p>

                <div className="de-footer-contact-links">

                  <a href="mailto:sales@deverp.com">
                    sales@deverp.com
                  </a>

                  <a href="tel:+971561612075">
                    +971 56 161 2075
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          MAP
      ====================================================== */}
      <section className="de-footer-map-section">

        <div className="de-footer-container">

          <div className="de-map-card de-footer-reveal-up">

            <div className="de-map-header">

              <div className="de-map-heading">

                <span className="de-footer-eyebrow">
                  OUR LOCATION
                </span>

                <h3>
                  Find us in Ahmedabad
                </h3>

                <p>
                  Visit DevERP Solutions Private Limited.
                  at our Ahmedabad office.
                </p>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=DevERP+Solutions+Pvt.+Ltd+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="de-map-link"
              >
                <span>
                  Open in Google Maps
                </span>

                <b>
                  ↗
                </b>
              </a>

            </div>

            <div className="de-footer-map">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6876514216074!2d72.51407501444244!3d23.03523802163621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859189a244f3%3A0x945ed2bf9f391991!2sDevERP%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1623847240420!5m2!1sen!2sin"
                title="DevERP Solutions Pvt. Ltd. Location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="de-footer-newsletter">

        <div className="de-footer-container">

          <div className="de-newsletter-card de-footer-reveal-up">

            <div className="de-newsletter-left">

              <span className="de-footer-eyebrow">
                STAY UPDATED
              </span>

              <h3>
                Get the latest from DevERP
              </h3>

              <p>
                Subscribe for technology, ERP and business updates.
              </p>

            </div>

            <div className="de-newsletter-right">

              <div className="de-newsletter-form">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubscribe();
                    }
                  }}
                />

                <button
                  type="button"
                  onClick={handleSubscribe}
                >
                  Subscribe
                  <span>↗</span>
                </button>

              </div>

              {message && (
                <div
                  className={`de-newsletter-message ${
                    message.includes("Thank You")
                      ? "success"
                      : "error"
                  }`}
                >
                  {message}
                </div>
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM
      ====================================================== */}
      <div className="de-footer-bottom">

        <div className="de-footer-container">

          <div className="de-footer-bottom-inner de-footer-bottom-reveal">

            <p>
              © {currentYear} DevERP Solutions Private Limited.
              <span> All Rights Reserved.</span>
            </p>

            <div className="de-footer-bottom-links">

              <a href="index.aspx?q=deverp_privacy_policy">
                Privacy Policy
              </a>

              <i />

              <a href="index.aspx?q=contact_us">
                Contact
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
 
