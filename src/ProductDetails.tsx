import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./ProductDetails.css";

interface Product {
  title: string;
  link: string;
}

const products: Product[] = [
  {
    title: "Ready Mix Concrete ERP",
    link: "index.aspx?q=ready_mix_concrete_erp",
  },
  {
    title: "Real Estate ERP",
    link: "index.aspx?q=real_estate_erp",
  },
  {
    title: "Engraving ERP",
    link: "index.aspx?q=engraving_erp",
  },
  {
    title: "Flexo Printing ERP",
    link: "index.aspx?q=flexo_printing_erp",
  },
  {
    title: "Light Weight Block (AAC) ERP",
    link: "index.aspx?q=light_weight_block_erp",
  },
  {
    title: "Pulse/Rice Mill ERP",
    link: "index.aspx?q=pulse/rice_mill_erp",
  },
  {
    title: "School Management ERP",
    link: "index.aspx?q=school_management_erp",
  },
  {
    title: "Printing & Packaging ERP",
    link: "index.aspx?q=printing_packaging_erp",
  },
  {
    title: "Automobiles And Work Shop Management ERP",
    link: "index.aspx?q=automobiles_and_work_shop_management_erp",
  },
  {
    title: "Transportation ERP",
    link: "index.aspx?q=transportation_erp",
  },
  {
    title: "Machine Manufacturing ERP",
    link: "index.aspx?q=machine_manufacturing_erp",
  },
  {
    title: "Pharmaceutical Production And Management ERP",
    link: "index.aspx?q=pharmaceutical_production_and_management_erp",
  },
  {
    title: "CRM ERP",
    link: "index.aspx?q=crm_erp",
  },
  {
    title: "Book Depot / Shop Management ERP",
    link: "index.aspx?q=book_depot_shop_management_erp",
  },
  {
    title: "Trading ERP",
    link: "index.aspx?q=trading_erp",
  },
];

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();

  const handleProductNavigation = (link: string) => {
    window.location.href = link;
  };

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
              simplify operations and improve business performance.
            </p>

            <div className="product-detail-breadcrumb">
              <button
                type="button"
                onClick={() => navigate("/")}
              >
                Home
              </button>

              <span>/</span>

              <strong>Products</strong>

              <span>/</span>

              <strong>Ready Mix Concrete ERP</strong>
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

              <div className="product-detail-heading">
                <span>INDUSTRY ERP SOLUTION</span>

                <h2>
                  Ready Mix Concrete
                  <br />
                  <strong>ERP</strong>
                </h2>

                <p>
                  A complete business management solution built
                  specifically for Ready Mix Concrete manufacturers.
                </p>
              </div>

              {/* Product Image */}
              <div className="product-detail-image">
                <img
                  src="CMSassets/images/it_service/RMC.jpg"
                  alt="Ready Mix Concrete ERP"
                />
              </div>

              {/* Introduction */}
              <div className="product-content-block">

                <p>
                  DevERP specializes in an integrated information
                  system designed for the{" "}
                  <strong>Ready Mix Concrete Industry</strong>.
                  We offer a perfect solution to high value RMC
                  manufacturers that can handle both concrete and
                  counter sales at one go and are looking to{" "}
                  <strong>
                    achieve optimum quality, reducing cost while
                    ensuring customer satisfaction.
                  </strong>
                </p>

                <p>
                  RMC Industries faces various challenges like
                  On-time Delivery, Handling Product Quality,
                  Managing Delivery-Note and Billing, Accurate
                  Outstanding flow, Tracking of Various Expenses,
                  Stock Level at Various Warehouses, Accurate
                  Consumption of Raw Material, Spare-Parts /
                  Machinery Maintenance, Managing more employees
                  and many more.
                </p>

                <p>
                  Our software is developed and designed in a way
                  that helps companies overcome such challenges.
                </p>

                <p>
                  <strong>Our software</strong> is an affordable,
                  powerful, yet flexible web based software that
                  truly integrates concrete batch controls, keeps
                  track of raw material consumption and finished
                  goods output, quality control, dispatch, GPS
                  vehicle tracking and business accounting on a
                  single platform.
                </p>

                <p>
                  We provide the plant owner/managers a real-time
                  fleet information system from mixing of
                  recipe/ingredients to delivery of finished product
                  that vastly helps in{" "}
                  <strong>
                    enhancing their business competitiveness and
                    taking effective business decisions.
                  </strong>
                </p>

                <p>
                  Our solution has been implemented at various RMC
                  companies and locations across India.
                </p>

              </div>

              {/* =================================================
                  FUNCTIONAL MODULES
              ================================================== */}
              <section className="product-modules">

                <div className="product-section-title">
                  <span>CORE FUNCTIONALITY</span>

                  <h3>
                    Functional Modules of DevERP
                    <br />
                    Ready Mix Concrete ERP
                  </h3>
                </div>

                {/* Marketing */}
                <div className="product-module">
                  <div className="product-module-number">
                    01
                  </div>

                  <div className="product-module-content">
                    <h4>Marketing</h4>

                    <p>
                      DevERP RMC Marketing software module helps
                      your company stay competitive and streamline
                      sales and marketing activities.
                    </p>

                    <ul>
                      <li>Sales Proposal / Quotation</li>
                      <li>Proforma Invoice</li>
                      <li>Multiple jobsite sales order</li>
                      <li>Dispatch order planning</li>
                      <li>Marketing persons visit record</li>
                      <li>Pending sales order status</li>
                      <li>Sales comparison / Region Wise report</li>
                    </ul>
                  </div>
                </div>

                {/* Sales */}
                <div className="product-module">
                  <div className="product-module-number">
                    02
                  </div>

                  <div className="product-module-content">
                    <h4>Sales &amp; Dispatch</h4>

                    <p>
                      DevERP Sales &amp; Dispatch module is designed
                      to boost company sales and improve dispatch
                      services.
                    </p>

                    <ul>
                      <li>Dispatch order</li>
                      <li>
                        Dispatch Challan / Sales Invoice /
                        Transport Summary
                      </li>
                      <li>Sales MIS Reports</li>
                    </ul>
                  </div>
                </div>

                {/* Inventory */}
                <div className="product-module">
                  <div className="product-module-number">
                    03
                  </div>

                  <div className="product-module-content">
                    <h4>Store / Inventory Management</h4>

                    <p>
                      Powerful and flexible inventory management
                      features help manage and report raw material
                      and stock information.
                    </p>

                    <ul>
                      <li>
                        Raw Material inward through weight bridge
                        software
                      </li>
                      <li>
                        Requisition, indent, purchase order,
                        purchase invoice
                      </li>
                      <li>
                        Item stock statement with item category
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Accounts */}
                <div className="product-module">
                  <div className="product-module-number">
                    04
                  </div>

                  <div className="product-module-content">
                    <h4>Accounts</h4>

                    <p>
                      DevERP Accounting module automates accounting
                      processes and gathers financial data from
                      different functional departments.
                    </p>

                    <ul>
                      <li>All kind of voucher entry</li>
                      <li>Purchase / Sales register</li>
                      <li>Daily Register, Bank / Cash register</li>
                      <li>
                        Dynamic tax classes for feature taxation
                        system
                      </li>
                      <li>
                        Statutory reports &amp; Taxation Reports
                      </li>
                      <li>Financial report</li>
                      <li>Product costing</li>
                      <li>
                        Vendor outstanding, party outstanding,
                        Ledger reports
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Production */}
                <div className="product-module">
                  <div className="product-module-number">
                    05
                  </div>

                  <div className="product-module-content">
                    <h4>Production</h4>

                    <p>
                      DevERP Production module facilitates
                      production planning, quality testing and
                      timely product delivery.
                    </p>

                    <ul>
                      <li>Daily Products report</li>
                      <li>Production Summary</li>
                    </ul>
                  </div>
                </div>

                {/* QA QC */}
                <div className="product-module">
                  <div className="product-module-number">
                    06
                  </div>

                  <div className="product-module-content">
                    <h4>QA / QC</h4>

                    <p>
                      DevERP QA/QC module helps detect and remove
                      defects and provides a systematic approach
                      for maintaining quality.
                    </p>

                    <ul>
                      <li>
                        Different Types of Raw Material Testing
                      </li>
                      <li>Mix Design Certificate</li>
                      <li>
                        Finish good testing / rejection Memo &
                        Analysis
                      </li>
                      <li>Other Analysis Reports</li>
                    </ul>
                  </div>
                </div>

                {/* Fleet */}
                <div className="product-module">
                  <div className="product-module-number">
                    07
                  </div>

                  <div className="product-module-content">
                    <h4>Fleet Management</h4>

                    <p>
                      DevERP Fleet Management module helps improve
                      workflows, manage vehicles and increase
                      operational efficiency.
                    </p>

                    <ul>
                      <li>Vehicle Management</li>
                      <li>Weight Bridge</li>
                      <li>Various Reports Via SMS / Email</li>
                      <li>Data sync</li>
                    </ul>
                  </div>
                </div>

              </section>

              {/* =================================================
                  KEY BENEFITS
              ================================================== */}
              <section className="product-benefits">

                <div className="product-section-title">
                  <span>WHY DEVERP RMC</span>

                  <h3>
                    Key Features &amp; Benefits
                  </h3>
                </div>

                <div className="product-benefits-grid">

                  <div className="benefit-item">
                    <span>01</span>
                    <p>
                      Fully customized to suit the needs of
                      Indian RMC industries
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>02</span>
                    <p>
                      Centralized data is secure and easy to
                      backup
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>03</span>
                    <p>
                      Updates can be made quickly and easily
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>04</span>
                    <p>
                      Information is accessible to a user
                      anywhere in the world
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>05</span>
                    <p>
                      Available 24 hours a day, 7 days a week
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>06</span>
                    <p>
                      Unlimited user system
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>07</span>
                    <p>
                      Cloud Hosting with easy and familiar
                      interface
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>08</span>
                    <p>
                      No special configuration needed on user's
                      PCs
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>09</span>
                    <p>
                      Lower costs
                    </p>
                  </div>

                  <div className="benefit-item">
                    <span>10</span>
                    <p>
                      Flexible and powerful ERP solution with
                      capability to manage multiple plant
                      locations
                    </p>
                  </div>

                </div>

              </section>

              {/* CTA */}
              <div className="product-detail-cta">

                <div>
                  <span>READY TO GET STARTED?</span>

                  <h3>
                    Take control of your RMC operations.
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                  <span>↗</span>
                </button>

              </div>

            </main>

            {/* =================================================
    SIDEBAR
================================================= */}
<aside className="product-sidebar">

  <div className="product-sidebar-card">

    {/* Header */}
    <div className="product-sidebar-header">
      <div className="sidebar-header-top">
        <span className="sidebar-header-line" />
        <span>EXPLORE</span>
      </div>

      <h3>Our Products</h3>

      <p>
        Industry-specific ERP solutions.
      </p>
    </div>

    {/* Product List */}
    <div className="product-sidebar-list">

      {products.map((product, index) => (
        <button
          type="button"
          key={product.title}
          className={`product-sidebar-item ${
            index === 0 ? "active" : ""
          }`}
          onClick={() => {
            if (index === 0) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              navigate("/products");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >

          {/* Number */}
          <span className="sidebar-product-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Product Name */}
          <span className="sidebar-product-name">
            {product.title}
          </span>

          {/* Arrow */}
          <span className="sidebar-product-arrow">
            →
          </span>

        </button>
      ))}

    </div>

  </div>

  {/* Sidebar CTA */}
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
      Talk to our team and find the solution
      that fits your business.
    </p>

    <button
      type="button"
      onClick={() => navigate("/contact")}
    >
      Talk to us
      <span>↗</span>
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