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
      "DevERP specializes in an integrated information system designed for the Ready-Mix Concrete Industry.",
    link: "index.aspx?q=ready_mix_concrete_erp",
  },
  {
    image: "CMSassets/images/it_service/REAL-ESTATE.png",
    title: "Real Estate ERP",
    description:
      "DevERP Real Estate software provide all in one highly secure solution to real estate firms of various sizes.",
    link: "index.aspx?q=real_estate_erp",
  },
  {
    image: "CMSassets/images/it_service/Engraving.jpg",
    title: "Engraving ERP",
    description:
      "DevERP Gravure software is among the first to provide engraving ERP solution in India.",
    link: "index.aspx?q=engraving_erp",
  },
  {
    image: "CMSassets/images/it_service/Flexo.jpg",
    title: "Flexo Printing ERP",
    description:
      "DevERP Flexo Printing software is an integrated ERP software specially designed for high quality printing and operational processes.",
    link: "index.aspx?q=flexo_printing_erp",
  },
  {
    image: "CMSassets/images/it_service/LIGHT_WEIGHT.jpg",
    title: "Light Weight Block (AAC) ERP",
    description:
      "DevERP Light Weight Block software is the exclusive and unique software solution for Brick & Block Industry.",
    link: "index.aspx?q=light_weight_block_erp",
  },
  {
    image: "CMSassets/images/it_service/RICE-MILL.jpg",
    title: "Pulse/Rice Mill ERP",
    description:
      "DevERP Pulse/Rice Mill software is specially designed to support all your business-related concern in the Food Manufacturing and Export industry.",
    link: "index.aspx?q=pulse/rice_mill_erp",
  },
  {
    image: "CMSassets/images/it_service/SCHOOL-MANAGEMENT.jpg",
    title: "School Management ERP",
    description:
      "DevERP School Management software aims at easing administrative hassles and enhancing efficiency and productivity.",
    link: "index.aspx?q=school_management_erp",
  },
  {
    image: "CMSassets/images/it_service/PRINTING.jpg",
    title: "Printing & Packaging ERP",
    description:
      "DevERP Printing & Packaging software has a full set of comprehensive features such as CRM, Production Management, Work Management, and Reporting to Accounting.",
    link: "index.aspx?q=printing_packaging_erp",
  },
  {
    image: "CMSassets/images/it_service/AUTOMOBILE.jpg",
    title: "Automobiles and Work shop Management ERP",
    description:
      "DevERP Automobiles and Workshop Management software help in meeting the desired requirements of highly competitive automotive business industries.",
    link: "index.aspx?q=automobiles_and_work_shop_management_erp",
  },
  {
    image: "CMSassets/images/it_service/FLEET.jpg",
    title: "Transportation ERP",
    description:
      "DevERP Fleet Management software solutions is designed specifically for fleet operation’s needs and plays a crucial role in Supply Chain Management.",
    link: "index.aspx?q=transportation_erp",
  },
  {
    image: "CMSassets/images/it_service/MANUFACTURING.jpg",
    title: "Machine Manufacturing ERP",
    description:
      "DevERP Machine Manufacturing software is a complete and centralized solution for managing entire range of manufacturing processes industry wide.",
    link: "index.aspx?q=machine_manufacturing_erp",
  },
  {
    image: "CMSassets/images/it_service/PHARMA.jpg",
    title: "Pharmaceutical Production and Management ERP",
    description:
      "DevERP Pharmaceutical Production and Management software is a sophisticated and complete package for pharmaceutical manufacturers and companies to streamline their business process.",
    link: "index.aspx?q=pharmaceutical_production_and_management_erp",
  },
  {
    image: "CMSassets/images/it_service/CRM.png",
    title: "CRM ERP",
    description:
      "DevERP CRM software is a complete and compact package, which is designed to provide the best of solution which aims at routing, prioritizing, and solving support tickets.",
    link: "index.aspx?q=crm_erp",
  },
  {
    image: "CMSassets/images/it_service/BOOK-DEPOT.jpg",
    title: "Book Depot / Shop Management ERP",
    description:
      "DevERP Book Depot/Shop Management software is a smart way to manage your bookstore in a systematic way for all types of bookstores may it be small or big.",
    link: "index.aspx?q=book_depot_shop_management_erp",
  },
  {
    image: "CMSassets/images/it_service/TRADING.jpg",
    title: "Trading ERP",
    description:
      "DevERP Trading software is built keeping in mind the requirements of Indian trading and distribution industry.",
    link: "index.aspx?q=trading_erp",
  },
];

const OurProducts: React.FC = () => {
  return (
    <section className="our-products-section">
      <div className="our-products-container">

        {/* Header */}
        <div className="our-products-heading">
          <span className="our-products-eyebrow">
            OUR SOLUTIONS
          </span>

          <h2>
            Our <span>Products</span>
          </h2>

          <p>
            We package the products with best services to make
            you a happy customer.
          </p>
        </div>

        {/* Products */}
        <div className="our-products-grid">
          {products.map((product, index) => (
            <a
               href="/products"
              className="product-card"
              key={product.link}
            >
              {/* Image */}
              <div className="product-card-image">
                <img
                  src={product.image}
                  alt={product.title}
                />

                <div className="product-card-overlay">
                  <span>View Product</span>
                  <span className="product-card-arrow">→</span>
                </div>

                <div className="product-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="product-card-content">
                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <div className="product-card-link">
                  Explore Solution
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProducts;