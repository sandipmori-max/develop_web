import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Building2,
  BriefcaseBusiness,
  Users,
  House,
  Contact,
  Newspaper,
  Sparkles,
  Send,
} from "lucide-react";  
import { products } from "./OurProducts";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const currentYear = new Date().getFullYear();

  const goTo = (path: string) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goProducts = (
    product: any,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    navigate("/products", {
      state: {
        product,
        products,
      },
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  return (
    <footer className="de-footer">

      {/* =====================================================
          CTA
      ====================================================== */}
    


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <section className="de-footer-main">
        <div className="de-footer-container">

          <div className="de-footer-main-grid">

            {/* BRAND */}
            <div className="de-footer-brand">

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

              <p>
                Enterprise software built around your
                business. DevERP delivers customized
                technology solutions that help businesses
                work smarter and grow faster.
              </p>

              <button
                type="button"
                className="de-footer-brand-link"
                onClick={() => goTo("/about")}
              >
                Discover DevERP
                <span>↗</span>
              </button>

            </div>


            {/* SOLUTIONS */}
            <div className="de-footer-links">

              <h3>Solutions</h3>

              <ul>
                {products.slice(0, 5).map((product) => (
                  <li key={product.id}>
                    <a
                      href="/products"
                      onClick={(e) => goProducts(product, e)}
                    >
                      {product.title}
                      <span>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
 

            </div>


            {/* COMPANY */}
            <div className="de-footer-links">

              <h3>Company</h3>

              <ul>
                <li>
                  <button type="button" onClick={() => goTo("/")}>
                    Home
                    <span>↗</span>
                  </button>
                </li>

                <li>
                  <button type="button" onClick={() => goTo("/about")}>
                    About Us
                    <span>↗</span>
                  </button>
                </li>

                <li>
                  <button type="button" onClick={() => goTo("/clients")}>
                    Clients
                    <span>↗</span>
                  </button>
                </li>

                <li>
                  <button type="button" onClick={() => goTo("/career")}>
                    Careers
                    <span>↗</span>
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => goTo("/contact_us")}
                  >
                    Contact
                    <span>↗</span>
                  </button>
                </li>
              </ul>

            </div>


            {/* GET IN TOUCH */}
            <div className="de-footer-contact">

              <h3>Get in touch</h3>

              <div className="de-footer-contact-block">

                <span className="de-footer-contact-label">
                  INDIA OFFICE
                </span>

                <p>
                  405, 407B Primate Complex,
                  <br />
                  Opp. Gormoh Hotel, Nr. Judges
                  <br />
                  Bunglow Cross Road, Bodakdev,
                  <br />
                  Ahmedabad - 380054,
                  <br />
                  Gujarat, India.
                </p>

              </div>

              <div className="de-footer-contact-info">

                <a href="mailto:admin@deverp.com">
                  admin@deverp.com
                </a>

                <a href="mailto:suppprt@deverp.com">
                  suppprt@deverp.com
                </a>

                <a href="tel:07935312554">
                  079 3531 2554
                </a>

                <a href="tel:+919327940159">
                  +91 93279 40159
                </a>

              </div>

            </div>

          </div>


          {/* =====================================================
              NEWSLETTER
          ====================================================== */}
          <div className="de-footer-newsletter">

            <div className="de-footer-newsletter-content">
              <span>STAY UPDATED</span>

              <h3>
                Get the latest from DevERP
              </h3>

              <p>
                Technology, ERP and business updates.
              </p>
            </div>

            <div className="de-footer-newsletter-form">

              <div className="de-footer-input-wrap">

                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
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
                  className={`de-footer-newsletter-message ${
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
          LOCATION
      ====================================================== */}
      <section className="de-footer-location">

        <div className="de-footer-container">

          <div className="de-footer-location-inner">

            <div className="de-footer-location-left">

              <div className="de-footer-location-dot">
                <span />
              </div>

              <div>
                <span className="de-footer-location-label">
                  INDIA OFFICE
                </span>

                <h3>
                  Ahmedabad, Gujarat, India
                </h3>
              </div>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=DevERP+Solutions+Pvt.+Ltd+Ahmedabad"
              target="_blank"
              rel="noreferrer"
              className="de-footer-map-button"
            >
              <span>View on Google Maps</span>
              <b>↗</b>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM
      ====================================================== */}
      <section className="de-footer-bottom">

        <div className="de-footer-container">

          <div className="de-footer-bottom-inner">

            <p>
              © {currentYear} DevERP Solutions Private Limited.
              <span> All Rights Reserved.</span>
            </p>

            <div className="de-footer-bottom-links">

              <button
                type="button"
                onClick={() => goTo("/privacy-policy")}
              >
                Privacy Policy
              </button>

              <i />

              <button
                type="button"
                onClick={() => goTo("/contact_us")}
              >
                Contact
              </button>

              <i />

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                aria-label="Back to top"
              >
                ↑
              </a>

            </div>

          </div>

        </div>

      </section>

    </footer>
  );
};

export default Footer;