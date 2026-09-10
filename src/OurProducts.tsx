import React from "react";
import "./OurProducts.css";

interface Product {
  image: string;
  title: string;
  description: string;
  link: string;
}

const products: Product[] = [
  {
    image: "CMSassets/images/it_service/RMC.jpg",
    title: "Ready Mix Concrete ERP",
    description:
      "Integrated ERP solution designed specifically for the Ready-Mix Concrete Industry.",
    link: "index.aspx?q=ready_mix_concrete_erp",
  },
  {
    image: "CMSassets/images/it_service/REAL-ESTATE.png",
    title: "Real Estate ERP",
    description:
      "Secure all-in-one business management solution for real estate companies of every size.",
    link: "index.aspx?q=real_estate_erp",
  },
  {
    image: "CMSassets/images/it_service/Engraving.jpg",
    title: "Engraving ERP",
    description:
      "A specialized ERP solution designed for modern engraving and gravure operations.",
    link: "index.aspx?q=engraving_erp",
  },
  {
    image: "CMSassets/images/it_service/Flexo.jpg",
    title: "Flexo Printing ERP",
    description:
      "Integrated software for high-quality printing, production and operational management.",
    link: "index.aspx?q=flexo_printing_erp",
  },
  {
    image: "CMSassets/images/it_service/LIGHT_WEIGHT.jpg",
    title: "Light Weight Block (AAC) ERP",
    description:
      "Complete management solution for Brick, Block and AAC manufacturing businesses.",
    link: "index.aspx?q=light_weight_block_erp",
  },
  {
    image: "CMSassets/images/it_service/RICE-MILL.jpg",
    title: "Pulse / Rice Mill ERP",
    description:
      "Powerful ERP solution for food manufacturing, processing and export operations.",
    link: "index.aspx?q=pulse/rice_mill_erp",
  },
  {
    image: "CMSassets/images/it_service/SCHOOL-MANAGEMENT.jpg",
    title: "School Management ERP",
    description:
      "Simplify administration, improve productivity and manage educational operations efficiently.",
    link: "index.aspx?q=school_management_erp",
  },
  {
    image: "CMSassets/images/it_service/PRINTING.jpg",
    title: "Printing & Packaging ERP",
    description:
      "Comprehensive solution covering CRM, production, work management, reporting and accounting.",
    link: "index.aspx?q=printing_packaging_erp",
  },
  {
    image: "CMSassets/images/it_service/AUTOMOBILE.jpg",
    title: "Automobiles & Workshop ERP",
    description:
      "Business management software built for modern automotive and workshop operations.",
    link: "index.aspx?q=automobiles_and_work_shop_management_erp",
  },
  {
    image: "CMSassets/images/it_service/FLEET.jpg",
    title: "Transportation ERP",
    description:
      "Fleet-focused ERP solution designed for transportation and supply-chain operations.",
    link: "index.aspx?q=transportation_erp",
  },
  {
    image: "CMSassets/images/it_service/MANUFACTURING.jpg",
    title: "Machine Manufacturing ERP",
    description:
      "Centralized platform for managing complete manufacturing processes and operations.",
    link: "index.aspx?q=machine_manufacturing_erp",
  },
  {
    image: "CMSassets/images/it_service/PHARMA.jpg",
    title: "Pharmaceutical ERP",
    description:
      "Sophisticated ERP platform designed to streamline pharmaceutical production and management.",
    link: "index.aspx?q=pharmaceutical_production_and_management_erp",
  },
  {
    image: "CMSassets/images/it_service/CRM.png",
    title: "CRM ERP",
    description:
      "Complete customer relationship solution for routing, prioritizing and resolving support requests.",
    link: "index.aspx?q=crm_erp",
  },
  {
    image: "CMSassets/images/it_service/BOOK-DEPOT.jpg",
    title: "Book Depot / Shop ERP",
    description:
      "Smart management solution for bookstores and retail book businesses of every size.",
    link: "index.aspx?q=book_depot_shop_management_erp",
  },
  {
    image: "CMSassets/images/it_service/TRADING.jpg",
    title: "Trading ERP",
    description:
      "Built specifically around the requirements of India's trading and distribution industry.",
    link: "index.aspx?q=trading_erp",
  },
];

const OurProducts: React.FC = () => {
  const featuredProduct = products[0];
  const remainingProducts = products.slice(1);

  return (
    <section className="products-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="products-hero">
        <div className="products-container">

          <div className="products-hero-grid">

            <div className="products-hero-content">

              <div className="products-kicker">
                <span className="products-kicker-line" />
                DEV ERP SOLUTIONS
              </div>

              <h1>
                Software built for
                <span> real businesses.</span>
              </h1>

              <p>
                Powerful ERP solutions designed around the unique
                requirements of different industries — helping
                businesses simplify operations, improve visibility
                and grow with confidence.
              </p>

              <div className="products-hero-meta">

                <div className="products-meta-item">
                  <strong>15+</strong>
                  <span>Industry Solutions</span>
                </div>

                <div className="products-meta-divider" />

                <div className="products-meta-item">
                  <strong>ERP</strong>
                  <span>Business Management</span>
                </div>

                <div className="products-meta-divider" />

                <div className="products-meta-item">
                  <strong>360°</strong>
                  <span>Business Visibility</span>
                </div>

              </div>
            </div>

            <div className="products-hero-visual">

              <div className="products-hero-circle" />

              <div className="products-hero-image-card">

                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                />

                <div className="products-hero-image-overlay" />

                <div className="products-hero-product-info">
                  <span>FEATURED SOLUTION</span>

                  <h3>{featuredProduct.title}</h3>

                  <a href={featuredProduct.link}>
                    Explore solution
                    <span>↗</span>
                  </a>
                </div>

              </div>

              <div className="products-floating-card">
                <div className="products-floating-icon">
                  ✓
                </div>

                <div>
                  <strong>Industry Focused</strong>
                  <span>Built around your workflow</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <div className="products-list-section">

        <div className="products-container">

          <div className="products-section-header">

            <div>
              <span className="products-section-label">
                OUR PRODUCTS
              </span>

              <h2>
                Solutions for every
                <span> industry.</span>
              </h2>
            </div>

            <p>
              Explore our collection of industry-specific ERP
              solutions designed to bring your entire business
              onto one powerful platform.
            </p>

          </div>

          <div className="products-grid">

            {remainingProducts.map((product, index) => (
              <a
                href={'products'}
                className="solution-card"
                key={product.link}
              >

                <div className="solution-card-image">

                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="solution-number">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div className="solution-card-image-arrow">
                    ↗
                  </div>

                </div>

                <div className="solution-card-body">

                  <div className="solution-card-title-row">

                    <h3>
                      {product.title}
                    </h3>

                    <span className="solution-arrow">
                      →
                    </span>

                  </div>

                  <p>
                    {product.description}
                  </p>

                  <div className="solution-card-footer">
                    <span>
                      Explore solution
                    </span>

                    <span className="solution-footer-line" />
                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>

      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="products-cta-section">

        <div className="products-container">

          <div className="products-cta">

            <div className="products-cta-pattern" />

            <div className="products-cta-content">

              <span>
                NEED A CUSTOM SOLUTION?
              </span>

              <h2>
                Let's build the right
                <strong> ERP for your business.</strong>
              </h2>

              <p>
                Tell us about your business requirements and
                we'll help you find the right solution.
              </p>

            </div>

            <a
              href="index.aspx?q=contact"
              className="products-cta-button"
            >
              Talk to our team
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurProducts;

