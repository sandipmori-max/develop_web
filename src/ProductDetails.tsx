import React from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./ProductDetails.css";

/* =========================================================
   TYPES
========================================================= */

interface ProductModule {
  number: string;
  title: string;
  description: string;
  features: string[];
}

interface ProductDetailsData {
  category: string;

  heading: {
    title: string;
    highlight: string;
  };

  shortDescription: string;

  introduction: string[];

  modules: ProductModule[];

  benefits: string[];

  cta: {
    label: string;
    title: string;
    buttonText: string;
  };
}

interface Product {
  image: string;
  title: string;
  description: string;
  link: string;
  details: ProductDetailsData;
}

/* =========================================================
   PRODUCT DETAILS
========================================================= */

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* =======================================================
     RECEIVE PRODUCT DATA
  ======================================================= */

  const product =
    location.state?.product as Product | undefined;

  const products =
    location.state?.products as Product[] | undefined;

  /* =======================================================
     NO PRODUCT FOUND
  ======================================================= */

  if (!product) {
    return (
      <section
        className="product-detail-section"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="product-detail-container">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2>Product not found</h2>

            <p>
              Please select a product from our products page.
            </p>

            <button
              type="button"
              onClick={() => navigate("/products")}
            >
              View Products
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* =======================================================
     PRODUCT DATA
  ======================================================= */

  const details = product.details;

  /*
    Fallback empty array so sidebar never crashes
    if products are not passed through location state.
  */
  const sidebarProducts = products ?? [];

  /* =======================================================
     SIDEBAR PRODUCT NAVIGATION
  ======================================================= */

  const handleSidebarNavigation = (
    sidebarProduct: Product
  ) => {
    /* Same product clicked */
    if (sidebarProduct.title === product.title) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    /*
      Navigate to product page with complete product data.
    */
    navigate("/products", {
      state: {
        product: sidebarProduct,
        products: sidebarProducts,
      },
    });

    /*
      Scroll after route navigation.
    */
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="product-detail-hero">
        <div className="product-detail-hero-bg">
          <img
            src="CMSassets/images/it_service/inner_page_banner2.jpg"
            alt="DevERP Products"
          />
        </div>

        <div className="product-detail-hero-overlay" />

        <div className="product-detail-container">
          <div className="product-detail-hero-content">
            <span className="product-detail-eyebrow">
              ENTERPRISE SOLUTIONS
            </span>

            <h1>PRODUCTS</h1>

            <p>
              Industry-focused ERP solutions designed to
              simplify operations and improve business
              performance.
            </p>

            {/* Breadcrumb */}

            <div className="product-detail-breadcrumb">
              <button
                type="button"
                onClick={() => navigate("/")}
              >
                Home
              </button>

              <span>/</span>

              <button
                type="button"
                onClick={() => navigate("/products-list")}
              >
                Products
              </button>

              <span>/</span>

              <strong>
                {product.title}
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="product-detail-section">
        <div className="product-detail-container">
          <div className="product-detail-layout">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <main className="product-detail-main">

              {/* PRODUCT HEADING */}

              <div className="product-detail-heading">
                <span>
                  {details.category}
                </span>

                <h2>
                  {details.heading.title}{" "}
                  <strong>
                    {details.heading.highlight}
                  </strong>
                </h2>

                <p>
                  {details.shortDescription}
                </p>
              </div>

              {/* PRODUCT IMAGE */}

              <div className="product-detail-image">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* INTRODUCTION */}

              <div className="product-content-block">
                {details.introduction.map(
                  (paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  )
                )}
              </div>

              {/* FUNCTIONAL MODULES */}

              <section className="product-modules">
                <div className="product-section-title">
                  <span>
                    CORE FUNCTIONALITY
                  </span>

                  <h3>
                    Functional Modules of DevERP
                    <br />
                    {product.title}
                  </h3>
                </div>

                {details.modules.map(
                  (module) => (
                    <div
                      className="product-module"
                      key={module.number}
                    >
                      <div className="product-module-number">
                        {module.number}
                      </div>

                      <div className="product-module-content">
                        <h4>
                          {module.title}
                        </h4>

                        <p>
                          {module.description}
                        </p>

                        <ul>
                          {module.features.map(
                            (feature, index) => (
                              <li key={index}>
                                {feature}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )
                )}
              </section>

              {/* KEY BENEFITS */}

              <section className="product-benefits">
                <div className="product-section-title">
                  <span>
                    WHY DevERP
                  </span>

                  <h3>
                    Key Features &amp; Benefits
                  </h3>
                </div>

                <div className="product-benefits-grid">
                  {details.benefits.map(
                    (benefit, index) => (
                      <div
                        className="benefit-item"
                        key={index}
                      >
                        <span>
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <p>
                          {benefit}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </section>

              {/* CTA */}

              <div className="product-detail-cta">
                <div>
                  <span>
                    {details.cta.label}
                  </span>

                  <h3>
                    {details.cta.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/contact_us")
                  }
                >
                  {details.cta.buttonText}

                  <span>↗</span>
                </button>
              </div>
            </main>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="product-sidebar">

              {/* SIDEBAR CARD */}

              <div className="product-sidebar-card">

                {/* SIDEBAR HEADER */}

                <div className="product-sidebar-header">
                  <div className="sidebar-header-top">
                    <span className="sidebar-header-line" />

                    <span>
                      EXPLORE
                    </span>
                  </div>

                  <h3>
                    Our Products
                  </h3>

                  <p>
                    Industry-specific ERP solutions.
                  </p>
                </div>

                {/* PRODUCT LIST */}

                <div className="product-sidebar-list">
                  {sidebarProducts.map(
                    (sidebarProduct, index) => {
                      const isActive =
                        sidebarProduct.title ===
                        product.title;

                      return (
                        <button
                          type="button"
                          key={sidebarProduct.link}
                          className={`product-sidebar-item ${
                            isActive
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleSidebarNavigation(
                              sidebarProduct
                            )
                          }
                        >
                          <span className="sidebar-product-number">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span className="sidebar-product-name">
                            {sidebarProduct.title}
                          </span>

                          <span className="sidebar-product-arrow">
                            →
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* SIDEBAR CTA */}

              <div className="product-sidebar-cta">
                <div className="sidebar-cta-label">
                  NEED HELP?
                </div>

                <h3>
                  Looking for the
                  <br />
                  right ERP?
                </h3>

                <p>
                  Talk to our team and find the
                  solution that fits your business.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/contact_us")
                  }
                >
                  Talk to us

                  <span>
                    ↗
                  </span>
                </button>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;