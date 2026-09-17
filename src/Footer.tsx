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
{/* =====================================================
    MAIN FOOTER — SINGLE ROW
===================================================== */}
<section className="de-footer-main">
  <div className="de-footer-container">

    <div className="de-footer-modern-row">

      {/* =====================================================
          BRAND
      ===================================================== */}
      <div className="de-footer-modern-brand">

        <button
          type="button"
          onClick={() => goTo("/")}
          className="de-footer-modern-logo"
          aria-label="DevERP Home"
        >
          <img
            src="CMSassets/images/logos/logo.png"
            alt="DevERP"
          />
        </button>

        <p>
          Enterprise software built around your business.
        </p>

      </div>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <div className="de-footer-modern-section">

        <h3>Solutions</h3>

        <div className="de-footer-modern-links">

          {products.slice(0, 5).map((product: any) => (
            <a
              key={product.id}
              href="/products"
              onClick={(e) => goProducts(product, e)}
            >
              {product.title}
            </a>
          ))}

        </div>

      </div>


      {/* =====================================================
          COMPANY
      ===================================================== */}
      <div className="de-footer-modern-section">

        <h3>Company</h3>

        <div className="de-footer-modern-links">

          <button type="button" onClick={() => goTo("/")}>
            Home
          </button>

          <button type="button" onClick={() => goTo("/about")}>
            About Us
          </button>

          <button type="button" onClick={() => goTo("/clients")}>
            Clients
          </button>

          <button type="button" onClick={() => goTo("/career")}>
            Careers
          </button>

          <button type="button" onClick={() => goTo("/contact_us")}>
            Contact
          </button>

        </div>

      </div>


      {/* =====================================================
          GET IN TOUCH
      ===================================================== */}
      <div className="de-footer-modern-section de-footer-touch">

        <h3>Get in touch</h3>

        <div className="de-footer-address">

          <span>INDIA OFFICE</span>

          <p>
            405, 407B Primate Complex,
            <br />
            Opp. Gormoh Hotel, Nr. Judges Bunglow,
            <br />
            Bodakdev, Ahmedabad - 380054
          </p>

        </div>

        <div className="de-footer-contact-row">

          <a href="mailto:admin@deverp.com">
            admin@deverp.com
          </a>

          <a href="tel:07935312554">
            079 3531 2554
          </a>

        </div>

      </div>


      {/* =====================================================
          STAY UPDATED
      ===================================================== */}
      <div className="de-footer-modern-section de-footer-updated">

        <h3>Stay Updated</h3>

        <p>
          Get the latest from DevERP
        </p>

        <div className="de-footer-modern-input">

          <input
            type="email"
            value={email}
            placeholder="Your email address"
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
            aria-label="Subscribe"
          >
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


      {/* =====================================================
          OFFICE / MAP
      ===================================================== */}
      <div className="de-footer-modern-office">

        <div className="de-footer-office-top">

          <span>OUR OFFICE</span>

          <div className="de-footer-status">
            <i></i>
            India
          </div>

        </div>

        <h3>
          Ahmedabad,
          <br />
          Gujarat, India
        </h3>

        <a
          href="https://www.google.com/maps/search/?api=1&query=DevERP+Solutions+Pvt.+Ltd+Ahmedabad"
          target="_blank"
          rel="noreferrer"
          className="de-footer-modern-map"
        >
          <span>View on Google Maps</span>
          <b>↗</b>
        </a>

      </div>

    </div>

  </div>
</section>

    </footer>
  );
};

export default Footer;