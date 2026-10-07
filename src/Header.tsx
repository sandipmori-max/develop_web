import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import ScrollProgress from "./ScrollProgress";
import { products } from "./OurProducts";
import { services } from "./ServiceList";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // =====================================================
  // SCROLL TO TOP
  // =====================================================

  const moveToTop = () => {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const duration = 300;

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

  // =====================================================
  // RESET SCROLL WHEN ROUTE CHANGES
  // =====================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Route change ke baad mobile menu close
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // =====================================================
  // BODY SCROLL LOCK WHEN MOBILE MENU OPEN
  // =====================================================

  useEffect(() => {
    const isMobile = window.innerWidth <= 1100;

    if (mobileOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // =====================================================
  // DROPDOWN
  // =====================================================

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) =>
      prev === name ? null : name
    );
  };

  // =====================================================
  // ACTIVE ROUTE
  // =====================================================

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // =====================================================
  // CLOSE MENU
  // =====================================================

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  // =====================================================
  // MOBILE MENU TOGGLE
  // =====================================================

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;

      if (!next) {
        setOpenDropdown(null);
      }

      return next;
    });
  };

  // =====================================================
  // REACT ROUTER NAVIGATION
  // =====================================================

  const handleNavigate = (
    path: string,
    e?: React.MouseEvent
  ) => {
    e?.preventDefault();

    // Same route
    if (location.pathname === path) {
      closeMenu();
      moveToTop();
      return;
    }

    // Close menu before navigation
    closeMenu();

    // React Router SPA navigation
    navigate(path);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  // =====================================================
  // LOGO
  // =====================================================

  const goHome = (e: React.MouseEvent) => {
    handleNavigate("/", e);
  };

  // =====================================================
  // ABOUT
  // =====================================================

  const goAbout = (e: React.MouseEvent) => {
    handleNavigate("/about", e);
  };

  // =====================================================
  // KNOWLEDGE
  // =====================================================

  const goKnowledge = (e: React.MouseEvent) => {
    handleNavigate("/knowledge", e);
  };

  // =====================================================
  // CLIENTS
  // =====================================================

  const goClients = (e: React.MouseEvent) => {
    handleNavigate("/clients", e);
  };

  // =====================================================
  // CAREER
  // =====================================================

  const goCareer = (e: React.MouseEvent) => {
    handleNavigate("/career", e);
  };

  // =====================================================
  // PRODUCTS
  // =====================================================

  const goProducts = (
    product: any,
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    closeMenu();

    navigate("/products", {
      state: {
        product,
        products,
      },
    });

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  // =====================================================
  // SERVICES
  // =====================================================

 const goServices = (
  service: any,
  e: React.MouseEvent
) => {
  e.preventDefault();

  closeMenu();

  navigate("/services", {
    state: {
      service,
      services,
    },
  });

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

  // =====================================================
  // BLOG
  // =====================================================

  const goBlog = (e: React.MouseEvent) => {
    handleNavigate("/blog", e);
  };

  // =====================================================
  // CONTACT
  // =====================================================

  const goContact = (e: React.MouseEvent) => {
    handleNavigate("/contact_us", e);
  };

  const goDD = (e: React.MouseEvent) => {
    handleNavigate("/module", e);
  };

  return (
    <header
      className="de-header cursor-normal"
      id="default_header"
    >
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
                <img
                  src="CMSassets/images/logos/logo.png"
                  alt="DevERP logo"
                  style={{
                    width: "48px",
                    height: "38px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </span>

              <span className="de-logo-content">
                <span className="de-logo-title">
                  DevERP Solutions Private Limited
                </span>
              </span>
            </a>

            {/* =====================================================
                NAVIGATION
            ====================================================== */}

            <nav
              className={`de-navigation ${mobileOpen
                  ? "de-navigation-open"
                  : ""
                }`}
            >
              <ul className="de-menu">

                {/* =====================================================
                    HOME
                ====================================================== */}

                <li className="de-menu-item">
                  <a
                    href="/"
                    className={`de-menu-link ${isActive("/")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={goHome}
                  >
                    <span>Home</span>
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
                    className={`de-menu-link de-dropdown-trigger ${location.pathname.startsWith(
                      "/products"
                    )
                        ? "de-active"
                        : ""
                      }`}
                    onClick={() => {
                      navigate('/products-list')
                      toggleDropdown("products")
                    }

                    }
                    aria-expanded={
                      openDropdown === "products"
                    }
                  >
                    <span>Products</span>

                    <span className="de-chevron">
                      ⌄
                    </span>
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
                      {products.map((product: any, index: any) => (
                        <button
                          type="button"
                          key={product.id}
                          className="de-product-link"
                          onClick={(e) => goProducts(product, e)}
                        > 
                          <span>
                            {product.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </li>
                

                  {/* =====================================================
                    SERVICE
                ====================================================== */}

                <li
                  className={`de-menu-item de-has-dropdown ${openDropdown === "service"
                      ? "de-dropdown-open"
                      : ""
                    }`}
                >
                  <button
                    type="button"
                    className={`de-menu-link de-dropdown-trigger ${location.pathname.startsWith(
                      "/service"
                    )
                        ? "de-active"
                        : ""
                      }`}
                    onClick={() => {
                      navigate('/service-list')
                      toggleDropdown("service")
                    }

                    }
                    aria-expanded={
                      openDropdown === "service"
                    }
                  >
                    <span>Services</span>

                    <span className="de-chevron">
                      ⌄
                    </span>
                  </button>

                  <div className="de-dropdown de-products-dropdown">

                    <div className="de-dropdown-header">
                      <span className="de-dropdown-label">
                        OUR Services
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
                      {services.map((product: any, index: any) => (
                        <button
                          type="button"
                          key={product.id}
                          className="de-product-link"
                          onClick={(e) => goServices(product, e)}
                        > 
                          <span>
                            {product.title}
                          </span>
                        </button>
                      ))}
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
                    className={`de-menu-link de-dropdown-trigger ${
    location.pathname.startsWith("/about") ||
    location.pathname.startsWith("/knowledge")
      ? "de-active"
      : ""
  }`}
                    onClick={() => {
                      navigate('/about')
                      toggleDropdown("about")
                    }

                    }
                    aria-expanded={
                      openDropdown === "about"
                    }
                  >
                    <span>About Us</span>

                    <span className="de-chevron">
                      ⌄
                    </span>
                  </button>

                  <div className="de-dropdown de-small-dropdown">

                    <div className="de-mini-heading">
                      <span>
                        ABOUT DevERP
                      </span>
                    </div>

                    <a
                      href="/about"
                      onClick={goAbout}
                    > 

                      <strong>
                        Who we are
                      </strong>
                    </a>

                    <a
                      href="/knowledge"
                      onClick={goKnowledge}
                    > 

                      <strong>
                        Knowledge Center DevERP
                      </strong>
                    </a>

                  </div>
                </li>

                {/* =====================================================
                    CLIENTS
                ====================================================== */}

<li className="de-menu-item">
                  <a
                    href="/module"
                    className={`de-menu-link ${
                      isActive("/module")
                        ? "de-active"
                        : ""
                    }`}
                    onClick={goDD}
                  >
                    <span>Functions</span>
                  </a>
                </li>
                <li className="de-menu-item">
                  <a
                    href="/clients"
                    className={`de-menu-link ${isActive("/clients")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={goClients}
                  >
                    <span>Clients</span>
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
                    className={`de-menu-link de-dropdown-trigger ${location.pathname.startsWith(
                      "/career"
                    )
                        ? "de-active"
                        : ""
                      }`}
                    onClick={() => {
                      navigate('/career')
                      toggleDropdown("career")
                    }
                    }
                    aria-expanded={
                      openDropdown === "career"
                    }
                  >
                    <span>
                      Career
                    </span>

                    <span className="de-chevron">
                      ⌄
                    </span>
                  </button>

                  <div className="de-dropdown de-small-dropdown">

                    <div className="de-mini-heading">
                      <span>
                        JOIN OUR TEAM
                      </span>
                    </div>

                    <a
                      href="/career"
                      onClick={goCareer}
                    > 

                      <strong>
                        LIFE @ DevERP
                      </strong>
                    </a>

                  </div>
                </li>

                {/* =====================================================
                    BLOG
                ====================================================== */}

                <li className="de-menu-item">
                  <a
                    href="/blog"
                    className={`de-menu-link ${isActive("/blog")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={goBlog}
                  >
                    <span>Blog</span>
                  </a>
                </li>

                {/* =====================================================
                    CONTACT
                ====================================================== */}

                <li className="de-menu-item">
                  <a
                    href="/contact_us"
                    className={`de-menu-link ${isActive("/contact_us")
                        ? "de-active"
                        : ""
                      }`}
                    onClick={goContact}
                  >
                    <span>Contact Us</span>
                  </a>
                </li>

                
              </ul>
            </nav>

            {/* =====================================================
                MOBILE BUTTON
            ====================================================== */}

            <button
              type="button"
              className={`de-mobile-toggle ${mobileOpen
                  ? "de-mobile-active"
                  : ""
                }`}
              onClick={toggleMobileMenu}
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

      <ScrollProgress />
    </header>
  );
};

export default Header;