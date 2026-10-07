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
    location.state?.product as any | undefined;

  const products =
    location.state?.products as any[] | undefined;

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
<section className="product-detail-section" >
  <div className="product-detail-container">
    <div className="product-detail-layout">

      {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

      <main className="product-detail-main">
       

        {/* =================================================
            PRODUCT INTRO / HEADING
        ================================================= */}

        <div className="product-detail-heading">

          <div className="product-heading-label">
            <span className="product-heading-line" />

            <span>
              {details.category}
            </span>
          </div>

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


        {/* =================================================
            PRODUCT IMAGE
        ================================================= */}

        <div className="product-detail-image-wrapper">

          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="product-image-info">

            <div className="product-image-info-item">
              <span>PRODUCT</span>

              <strong>
                {product.title}
              </strong>
            </div>

            <div className="product-image-divider" />

            <div className="product-image-info-item">
              <span>CATEGORY</span>

              <strong>
                {details.category}
              </strong>
            </div>

          </div>

        </div>


        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <section className="product-introduction">

          <div className="product-section-title">

            <span>
              ABOUT THE SOLUTION
            </span>

            <h3>
              Built Around Your
              <br />
              <strong>Business Needs</strong>
            </h3>

          </div>

          <div className="product-content-block">

            {details.introduction.map(
              (paragraph: any , index: any) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}

          </div>

        </section>


        {/* =================================================
            FUNCTIONAL MODULES
        ================================================= */}

        {details.modules &&
          details.modules.length > 0 && (
            <section className="product-modules">

              <div className="product-section-title">

                <span>
                  CORE FUNCTIONALITY
                </span>

                <h3>
                  Functional Modules of
                  <br />
                  <strong>
                    {product.title}
                  </strong>
                </h3>

                <p>
                  Powerful modules designed to manage
                  your business operations efficiently.
                </p>

              </div>


              <div className="product-module-grid">

                {details.modules.map(
                  (module: any, index: any) => (
                    <article
                      className="product-module-card"
                      key={module.number}
                    >
 


                      <div className="product-module-content">

                        <h4>
                          {module.title}
                        </h4>

                        <p>
                          {module.description}
                        </p>


                        {module.features &&
                          module.features.length > 0 && (
                            <ul>

                              {module.features.map(
                                (feature: any, featureIndex: any) => (
                                  <li key={featureIndex}>
                                     <p>
                                      {feature}
                                    </p>
                                  </li>
                                )
                              )}

                            </ul>
                          )}

                      </div>

                    </article>
                  )
                )}

              </div>

            </section>
          )}


        {/* =================================================
            KEY BENEFITS
        ================================================= */}

       {details.benefits &&
  details.benefits.length > 0 && (
    <section className="product-benefits">

      {/* ================= HEADER ================= */}
      <div className="product-benefits-header">

        <div className="product-benefits-heading">

          <div className="product-benefits-eyebrow">
            <span className="benefits-eyebrow-line" />
            <span>WHY DevERP</span>
          </div>

          <h3>
            Key Features &amp;
            <br />
            <strong>Business Benefits</strong>
          </h3>

        </div>

        <p className="product-benefits-description">
          Designed to improve productivity, visibility
          and overall business performance with a
          smarter and more connected ERP experience.
        </p>

      </div>


      {/* ================= BENEFITS ================= */}
      <div className="product-benefits-grid">

        {details.benefits.map((benefit: any, index: any) => (
          <article
            className="benefit-item"
            key={index}
          >

            {/* TOP */}
            <div className="benefit-item-top">

              <span className="benefit-number">
                {String(index + 1).padStart(2, "0")}
              </span>
 

            </div>


            {/* CONTENT */}
            <div className="benefit-item-content">

              <span className="benefit-label">
                BUSINESS BENEFIT
              </span>

              <p>{benefit}</p>

            </div>


            {/* BOTTOM */}
            <div className="benefit-item-bottom">

              <span className="benefit-line" />
 

            </div>

          </article>
        ))}

      </div>

    </section>
  )}

        {/* =================================================
            CTA
        ================================================= */}

        <div className="product-detail-cta">

          <div className="product-cta-content">

            <span>
              {details.cta.label}
            </span>

            <h3>
              {details.cta.title}
            </h3>

          </div>


         

        </div>

      </main>


      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="product-sidebar">

        {/* =================================================
            PRODUCT NAVIGATION
        ================================================= */}

        <div className="product-sidebar-card">

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
              Explore our industry-specific ERP
              solutions.
            </p>

          </div>


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


        {/* =================================================
            SIDEBAR CTA
        ================================================= */}

     

      </aside>

    </div>
  </div>
</section>
    </>
  );
};

export default ProductDetails;