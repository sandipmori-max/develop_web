import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);




 const moveToTop = () => {
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  const duration = 100; // animation speed - 1200ms

  const easeInOutCubic = (t: number) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(
      0,
      startPosition * (1 - easedProgress)
    );

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  // =====================================================
  // ROUTE NAVIGATION
  // =====================================================

  const goHome = (e?: React.MouseEvent) => {
    moveToTop()
    e?.preventDefault();
    closeMenu();
    navigate("/");
  };

  const goAbout = (e?: React.MouseEvent) => {
    moveToTop()

    e?.preventDefault();
    closeMenu();
    navigate("/about");
  };

  const goClients = (e?: React.MouseEvent) => {
    moveToTop()

    e?.preventDefault();
    closeMenu();
    navigate("/clients");
  };

  const goCareer = (e?: React.MouseEvent) => {
    moveToTop()

    e?.preventDefault();
    closeMenu();
    navigate("/career");
  };
  return (
    <header className="de-header" id="default_header">

      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}


      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
      <div className="de-navbar">
        <div className="de-container">

          <div className="de-navbar-inner">

            {/* =====================================================
                LOGO
            ====================================================== */}
            <a
              href="/"
              className="de-logo"
              onClick={goHome}
            >
              <span className="de-logo-mark">
                <span className="de-logo-dot" />
              </span>

              <span className="de-logo-content">
                <span className="de-logo-title">
                  DevERP  Solutions Private Limited
                </span>

                {/* <span className="de-logo-company">
     
    </span> */}
              </span>
            </a>

            {/* =====================================================
                DESKTOP / MOBILE NAV
            ====================================================== */}
            <nav
              className={`de-navigation ${mobileOpen ? "de-navigation-open" : ""
                }`}
            >

              <ul className="de-menu">

                {/* =====================================================
                    HOME
                ====================================================== */}
                <li className="de-menu-item">
                  <a
                    href="/"
                    className={`de-menu-link ${isActive("/") ? "de-active" : ""
                      }`}
                    onClick={goHome}
                  >
                    Home
                  </a>
                </li>


                {/* =====================================================
                    PRODUCTS
                ====================================================== */}
                <li
                  className={`de-menu-item de-has-dropdown ${openDropdown === "products"
                      ? "de-dropdown-open"
                      : ""
                    }`}
                >
                  <button
                    type="button"
                    className={`de-menu-link de-dropdown-trigger ${location.pathname.startsWith("/products")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={() => toggleDropdown("products")}
                  >
                    <span>Products</span>
                    <span className="de-chevron">⌄</span>
                  </button>

                  <div className="de-dropdown de-products-dropdown">

                    <div className="de-dropdown-header">
                      <span className="de-dropdown-label">
                        OUR PRODUCTS
                      </span>

                      <h3>
                        Industry-specific ERP
                      </h3>

                      <p>
                        Powerful solutions designed for
                        growing businesses.
                      </p>
                    </div>

                    <div className="de-product-grid">

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">01</span>
                        <span>Ready Mix Concrete ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">02</span>
                        <span>Real Estate ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">03</span>
                        <span>Engraving ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">04</span>
                        <span>Flexo Printing ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">05</span>
                        <span>Light Weight Block (AAC) ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">06</span>
                        <span>Pulse/Rice Mill ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">07</span>
                        <span>School Management ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">08</span>
                        <span>Printing &amp; Packaging ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">09</span>
                        <span>
                          Automobiles And Work Shop Management ERP
                        </span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">10</span>
                        <span>Transportation ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">11</span>
                        <span>Machine Manufacturing ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">12</span>
                        <span>
                          Pharmaceutical Production And Management ERP
                        </span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">13</span>
                        <span>CRM ERP</span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">14</span>
                        <span>
                          Book Depot / Shop Management ERP
                        </span>
                      </a>

                      <a href="/productslist" onClick={() => closeMenu()}>
                        <span className="de-product-number">15</span>
                        <span>Trading ERP</span>
                      </a>

                    </div>
                  </div>
                </li>

                {/* =====================================================
                    SERVICES
                ====================================================== */}
                <li
                  className={`de-menu-item de-has-dropdown ${openDropdown === "services"
                      ? "de-dropdown-open"
                      : ""
                    }`}
                >
                  <button
                    type="button"
                    className={`de-menu-link de-dropdown-trigger ${location.pathname.startsWith("/services")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={() => toggleDropdown("services")}
                  >
                    <span>Services</span>
                    <span className="de-chevron">⌄</span>
                  </button>

                  <div className="de-dropdown de-service-dropdown">

                    <div className="de-dropdown-header">
                      <span className="de-dropdown-label">
                        WHAT WE DO
                      </span>

                      <h3>
                        Technology &amp; Services
                      </h3>

                      <p>
                        Digital solutions that help your
                        business move faster.
                      </p>
                    </div>

                    <div className="de-service-grid">

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">↗</span>
                        <span>
                          <strong>MIS</strong>
                          <small>BI &amp; Reporting</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">⇩</span>
                        <span>
                          <strong>Data Export</strong>
                          <small>Secure data solutions</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">▣</span>
                        <span>
                          <strong>Mobile App Development</strong>
                          <small>iOS &amp; Android apps</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">☁</span>
                        <span>
                          <strong>Cloud Back Up</strong>
                          <small>Reliable cloud backup</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">✉</span>
                        <span>
                          <strong>SMS Services</strong>
                          <small>Business messaging</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">@</span>
                        <span>
                          <strong>Email Server</strong>
                          <small>Professional email</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">◉</span>
                        <span>
                          <strong>Domain Registration</strong>
                          <small>Build your identity</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">▤</span>
                        <span>
                          <strong>Website Hosting</strong>
                          <small>Fast &amp; secure hosting</small>
                        </span>
                      </a>

                      <a
                        href="/services"
                        onClick={() => closeMenu()}
                      >
                        <span className="de-service-icon">&lt;/&gt;</span>
                        <span>
                          <strong>Web Development</strong>
                          <small>Modern web solutions</small>
                        </span>
                      </a>

                    </div>
                  </div>
                </li>


                {/* =====================================================
                    ABOUT US
                ====================================================== */}
                <li
                  className={`de-menu-item de-has-dropdown ${openDropdown === "about"
                    ? "de-dropdown-open"
                    : ""
                    }`}
                >
                  <button
                    type="button"
                    className={`de-menu-link de-dropdown-trigger ${location.pathname.startsWith("/about")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={() => toggleDropdown("about")}
                  >
                    <span>About Us</span>
                    <span className="de-chevron">⌄</span>
                  </button>

                  <div className="de-dropdown de-small-dropdown">

                    <div className="de-mini-heading">
                      <span>ABOUT DEV ERP</span>
                    </div>

                    {/* WHO WE ARE */}
                    <a
                      href="/about"
                      onClick={goAbout}
                    >
                      <span>01</span>
                      <strong>Who we are</strong>
                    </a>

                    {/* KNOWLEDGE CENTER */}
                    <a
                      href="index.aspx?q=knowledgecenter_deverp"
                      onClick={closeMenu}
                    >
                      <span>02</span>
                      <strong>Knowledge Center DevERP</strong>
                    </a>

                  </div>
                </li>


                {/* =====================================================
                    CLIENTS
                ====================================================== */}
                <li className="de-menu-item">
                  <a
                    href="/clients"
                    className={`de-menu-link ${isActive("/clients") ? "de-active" : ""
                      }`}
                    onClick={goClients}
                  >
                    Clients
                  </a>
                </li>


                {/* =====================================================
                    CAREER
                ====================================================== */}
                <li
                  className={`de-menu-item de-has-dropdown ${openDropdown === "career"
                    ? "de-dropdown-open"
                    : ""
                    }`}
                >
                  <button
                    type="button"
                    className={`de-menu-link de-dropdown-trigger ${location.pathname.startsWith("/career")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={() => toggleDropdown("career")}
                  >
                    <span>Career</span>
                    <span className="de-chevron">⌄</span>
                  </button>

                  <div className="de-dropdown de-small-dropdown">

                    <div className="de-mini-heading">
                      <span>JOIN OUR TEAM</span>
                    </div>

                    <a
                      href="/career"
                      onClick={goCareer}
                    >
                      <span>01</span>
                      <strong>LIFE @ DevERP</strong>
                    </a>

                  </div>
                </li>


                {/* =====================================================
                    BLOG
                ====================================================== */}
                <li className="de-menu-item">
                  <a
                    href="/blog"
                    className={`de-menu-link ${isActive("/blog") ? "de-active" : ""
                      }`}
                    onClick={(e) => {
                      moveToTop()

                      e.preventDefault();
                      closeMenu();
                      navigate("/blog");
                    }}
                  >
                    Blog
                  </a>
                </li>

                {/* =====================================================
                    CONTACT
                ====================================================== */}
                <li className="de-menu-item">
                  <a
                    className={`de-menu-link ${isActive("/contact_us") ? "de-active" : ""
                      }`}
                    href="contact_us"
                    onClick={(e) => {
                      moveToTop()

                      e.preventDefault();
                      closeMenu();
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </a>
                </li>

              </ul>
            </nav>


            {/* =====================================================
                MOBILE BUTTON
            ====================================================== */}
            <button
              type="button"
              className={`de-menu-item de-has-dropdown ${openDropdown === "about" ? "de-dropdown-open" : ""
                }`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>

          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;