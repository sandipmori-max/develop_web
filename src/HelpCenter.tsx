import React, { useEffect, useMemo, useState } from "react";
import "./HelpCenter.css";

interface HelpCategory {
  name: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

const helpCategories: HelpCategory[] = [
  {
    name: "Sales",
    description: "Manage your complete sales workflow.",
    icon: "↗",
    items: [
      "Customers",
      "Quotes",
      "Invoices",
      "Subscriptions",
      "Credit Notes",
    ],
  },

  {
    name: "Purchases",
    description: "Manage vendors, orders and payments.",
    icon: "↓",
    items: [
      "Vendors",
      "Request for Quotes",
      "Purchase Orders",
      "Bills",
      "Payments Made",
      "Vendor Credits",
    ],
  },

  {
    name: "Inventory",
    description: "Manage items, pricing and inventory operations.",
    icon: "▦",
    items: [
      "Items",
      "Composite Items",
      "Bill of Materials",
      "Item Categories",
      "Price Lists",
      "QR Code & Barcode Generation",
    ],
  },

  {
    name: "Accounting",
    description: "Manage accounting and financial operations.",
    icon: "₹",
    items: [
      "Manual Journals",
      "Journal Templates",
      "Base Currency Adjustment",
      "Chart of Accounts",
      "Sub-Accounts",
      "Zoho Practice",
    ],
  },

  {
    name: "Payroll",
    description: "Manage employees, payroll and compliance.",
    icon: "♙",
    items: [
      "Employees",
      "Pay Runs",
      "Contractors",
      "TDS Liabilities",
      "TDS Challans",
      "Form 24Q",
      "Loans",
      "Giving",
      "Payroll Documents",
    ],
  },

  {
    name: "Manufacturing",
    description: "Manage production and manufacturing operations.",
    icon: "⚙",
    items: [
      "Manufacturing Order",
      "Job Cards",
      "Shop Floors",
      "Work Center",
      "Cost Templates",
      "Manufacturing Operations",
    ],
  },

  {
    name: "Distribution",
    description: "Manage distribution, routes and field operations.",
    icon: "⇄",
    items: [
      "Distribution Dashboard",
      "Sales Regions",
      "Routes",
      "Journey Plans",
      "Beats",
    ],
  },

  {
    name: "Contributions",
    description: "Manage funds, donors and donations.",
    icon: "♡",
    items: [
      "Funds",
      "Donors",
      "Donations",
    ],
  },

  {
    name: "Compliance Reports",
    description: "Access compliance and regulatory reports.",
    icon: "✓",
    items: [
      "Compliance Reports",
    ],
  },

  {
    name: "Settings",
    description: "Configure your organization and preferences.",
    icon: "⚙",
    items: [
      "Organization Settings",
      "Users & Roles",
      "Permissions",
      "Preferences",
      "Taxes",
      "Notifications",
    ],
  },

  {
    name: "Quality",
    description: "Manage quality checks and inspections.",
    icon: "◉",
    items: [
      "Quality Template",
      "Quality Rules",
      "Quality Inspection",
      "Inspection Worklists",
    ],
  },

  {
    name: "Retail",
    description: "Manage retail sales and cash operations.",
    icon: "▣",
    items: [
      "Sales",
      "Sessions",
      "Registers",
      "Cash Management",
      "Payment Methods",
    ],
  },

  {
    name: "Extend and develop",
    description: "Extend your ERP with integrations and commerce tools.",
    icon: "＋",
    items: [
      "Integrations",
      "Zoho Apps",
      "SMS Integrations",
      "WhatsApp",
      "Shipping",
      "Shopping Carts",
      "eCommerce",
    ],
  },

  {
    name: "Developer & Data",
    description: "Build, connect and customize your ERP.",
    icon: "</>",
    items: [
      "Incoming Webhooks",
      "Connections",
      "Signals",
      "Webforms",
      "Custom Modules",
      "Widgets",
    ],
  },

  {
    name: "Automation",
    description: "Automate reports, workflows and schedules.",
    icon: "⚡",
    items: [
      "Report Automation",
      "Workflow Rules",
      "Schedules",
    ],
  },
];

const popularCategories = [
  "Sales",
  "Purchases",
  "Inventory",
  "Accounting",
  "Payroll",
  "Manufacturing",
];

const HelpCenter: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [selectedCategory, setSelectedCategory] =
    useState<HelpCategory | null>(null);

  const [roadmapOpen, setRoadmapOpen] = useState(false);

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return helpCategories
      .filter((category) => {
        if (
          activeCategory !== "All" &&
          category.name !== activeCategory
        ) {
          return false;
        }

        if (!query) {
          return true;
        }

        const categoryMatch =
          category.name.toLowerCase().includes(query) ||
          category.description.toLowerCase().includes(query);

        const itemMatch = category.items.some((item) =>
          item.toLowerCase().includes(query)
        );

        return categoryMatch || itemMatch;
      })
      .map((category) => {
        if (!query) {
          return category;
        }

        const categoryMatch =
          category.name.toLowerCase().includes(query) ||
          category.description.toLowerCase().includes(query);

        if (categoryMatch) {
          return category;
        }

        return {
          ...category,
          items: category.items.filter((item) =>
            item.toLowerCase().includes(query)
          ),
        };
      });
  }, [search, activeCategory]);

  const openRoadmap = (category: HelpCategory) => {
    setSelectedCategory(category);
    setRoadmapOpen(true);
  };

  const closeRoadmap = () => {
    setRoadmapOpen(false);
    setSelectedCategory(null);
  };

  /*
   * Prevent background page scrolling while modal is open.
   */
  useEffect(() => {
    if (roadmapOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [roadmapOpen]);

  /*
   * ESC TO CLOSE
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && roadmapOpen) {
        closeRoadmap();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [roadmapOpen]);

  return (
    <div className="help-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="help-hero">
        <div className="help-hero-inner">

         
          <h1>
            Find help by
            <span> business functions</span>
          </h1>

          <p>
            Explore ERP functions, workflows and tools
            designed to help you manage your business better.
          </p>

          <div className="help-search">

            <span className="help-search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search for a function, module or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="help-search-clear"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}

          </div>

          <div className="help-popular">

            <span>
              Popular:
            </span>

            {popularCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory(category);
                }}
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FILTER
      ===================================================== */}

      <section className="help-filter-section">

        <div className="help-container">

          <div className="help-filter-scroll">

            <button
              type="button"
              className={`help-filter ${
                activeCategory === "All"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>

            {helpCategories.map((category) => (
              <button
                type="button"
                key={category.name}
                className={`help-filter ${
                  activeCategory === category.name
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category.name)
                }
              >
                {category.name}
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="help-categories-section">

        <div className="help-container">

          <div className="help-section-heading">

            <div>
              <span>
                EXPLORE
              </span>

              <h2>
                Business functions
              </h2>
            </div>

            <p>
              Select a category to explore
              its complete workflow.
            </p>

          </div>


          {filteredCategories.length > 0 ? (

            <div className="help-category-grid">

              {filteredCategories.map((category) => (

                <div
                  className="help-category-card"
                  key={category.name}
                >

                  <div className="help-category-top">

                    <div className="help-category-icon">
                      {category.icon}
                    </div>

                    <div className="help-category-arrow">
                      →
                    </div>

                  </div>


                  <h3>
                    {category.name}
                  </h3>

                  <p>
                    {category.description}
                  </p>


                  <div className="help-category-items">

                    {category.items
                      .slice(0, 5)
                      .map((item) => (

                        <div
                          className="help-category-item"
                          key={item}
                        >
                          <span />
                          {item}
                        </div>

                      ))}

                    {category.items.length > 5 && (

                      <div className="help-more">
                        +{category.items.length - 5} more
                      </div>

                    )}

                  </div>


                  <button
                    type="button"
                    className="help-view-all"
                    onClick={() =>
                      openRoadmap(category)
                    }
                  >
                    Road map
                    <span>
                      →
                    </span>
                  </button>

                </div>

              ))}

            </div>

          ) : (

            <div className="help-empty">

              <div className="help-empty-icon">
                ⌕
              </div>

              <h3>
                No functions found
              </h3>

              <p>
                Try searching with another keyword
                or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Clear filters
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          SUPPORT
      ===================================================== */}

      <section className="help-support-section">

        <div className="help-container">

          <div className="help-support">

            <div>

              <span className="help-support-label">
                NEED MORE HELP?
              </span>

              <h2>
                Our team is here to help.
              </h2>

              <p>
                Can't find what you're looking for?
                Get in touch with the DevERP team.
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                (window.location.href = "/contact_us")
              }
            >
              Contact Support
              <span>
                →
              </span>
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROADMAP MODAL
      ===================================================== */}

      {roadmapOpen && selectedCategory && (
        <RoadmapModal
          category={selectedCategory}
          onClose={closeRoadmap}
        />
      )}

    </div>
  );
};


/* =========================================================
   ROADMAP MODAL
   ========================================================= */

interface RoadmapModalProps {
  category: HelpCategory;
  onClose: () => void;
}

const RoadmapModal: React.FC<RoadmapModalProps> = ({
  category,
  onClose,
}) => {

  const items = category.items;

  /*
   * Every item gets a Y position.
   *
   * THERE IS NO:
   *
   * step-1
   * step-2
   * ...
   * step-6
   *
   * Everything is calculated from items.length.
   */

  const STEP_GAP = 155;
  const TOP_SPACE = 80;
  const BOTTOM_SPACE = 90;

  const roadmapHeight =
    TOP_SPACE +
    Math.max(items.length - 1, 0) * STEP_GAP +
    BOTTOM_SPACE;


  /*
   * SVG WIDTH
   */
  const SVG_WIDTH = 1000;


  /*
   * Road center.
   */
  const CENTER_X = 500;


  /*
   * Get Y position for any item.
   *
   * Works for:
   *
   * 1
   * 2
   * 3
   * 6
   * 7
   * 20
   * 50
   *
   */
  const getY = (index: number) => {
    return (
      TOP_SPACE +
      index * STEP_GAP
    );
  };


  /*
   * Generate curved road dynamically.
   *
   * Example:
   *
   * 1
   *  ╲
   *   2
   *  ╱
   * 3
   *  ╲
   *  4
   *  ╱
   * 5
   *
   * It automatically continues.
   */
  const roadPath = useMemo(() => {

    if (items.length === 0) {
      return "";
    }

    if (items.length === 1) {
      return `
        M ${CENTER_X} ${getY(0)}
        L ${CENTER_X} ${getY(0)}
      `;
    }

    let path = `
      M ${CENTER_X}
      ${getY(0)}
    `;

    for (
      let index = 0;
      index < items.length - 1;
      index++
    ) {

      const currentY = getY(index);
      const nextY = getY(index + 1);

      const middleY =
        (currentY + nextY) / 2;

      /*
       * Alternate curve direction.
       */
      const direction =
        index % 2 === 0
          ? 1
          : -1;

      const curveAmount = 150;

      const controlX =
        CENTER_X +
        direction * curveAmount;


      path += `
        C
        ${controlX} ${middleY - 35},
        ${controlX} ${middleY + 35},
        ${CENTER_X} ${nextY}
      `;
    }

    return path;

  }, [items.length]);


  return (
    <div
      className="erp-help-modal-overlay"
      onMouseDown={(event) => {

        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }

      }}
    >

      <div className="erp-help-modal">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="erp-help-modal-header">

          <div className="erp-help-modal-title">

            <div className="erp-help-modal-icon">
              {category.icon}
            </div>

            <div>

              <span className="erp-help-modal-eyebrow">
                PROCESS ROADMAP
              </span>

              <h2>
                {category.name}
              </h2>

              <p>
                {category.description}
              </p>

            </div>

          </div>


          <button
            type="button"
            className="erp-help-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

        </div>


        {/* =================================================
            ROADMAP BODY
        ================================================= */}

        <div className="erp-help-modal-body">

          <div className="erp-roadmap-top">

            <div>

              <span>
                WORKFLOW
              </span>

              <h3>
                Follow the process
              </h3>

            </div>

            <div className="erp-roadmap-count">
              {items.length}{" "}
              {items.length === 1
                ? "Step"
                : "Steps"}
            </div>

          </div>


          <div
            className="erp-curved-roadmap"
            style={{
              height: `${roadmapHeight}px`,
            }}
          >

            {/* =================================================
                DYNAMIC SVG ROAD
            ================================================= */}

            <svg
              className="erp-curved-svg"
              viewBox={`0 0 ${SVG_WIDTH} ${roadmapHeight}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >

              {/* ROAD OUTER */}

              <path
                d={roadPath}
                fill="none"
                stroke="#dce7ee"
                strokeWidth="36"
                strokeLinecap="round"
                strokeLinejoin="round"
              />


              {/* ROAD INNER */}

              <path
                d={roadPath}
                fill="none"
                stroke="#ffffff"
                strokeWidth="27"
                strokeLinecap="round"
                strokeLinejoin="round"
              />


              {/* ROAD CENTER */}

              <path
                d={roadPath}
                fill="none"
                stroke="#9fb1bf"
                strokeWidth="3"
                strokeDasharray="12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

            </svg>


            {/* =================================================
                DYNAMIC STEPS
            ================================================= */}

            {items.map((item, index) => {

              const y =
                getY(index);

              /*
               * Alternate cards:
               *
               * 1 → right
               * 2 → left
               * 3 → right
               * 4 → left
               *
               * But the ROAD itself remains one
               * vertical curved path.
               */
              const side =
                index % 2 === 0
                  ? "right"
                  : "left";


              const isLast =
                index === items.length - 1;


              return (
                <div
                  key={`${item}-${index}`}
                  className={`erp-curved-step erp-step-${side}`}
                  style={{
                    top: `${y}px`,
                  }}
                >

                  {/* =================================================
                      NUMBER NODE
                  ================================================= */}

                  <div className="erp-step-node">

                    <span>
                      {index + 1}
                    </span>

                  </div>


                  {/* =================================================
                      STEP CARD
                  ================================================= */}

                  <div className="erp-step-card">

                    <div className="erp-step-card-top">

                      <span>
                        STEP{" "}
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      {isLast && (
                        <b>
                          END
                        </b>
                      )}

                    </div>

                    <h4>
                      {item}
                    </h4>

                  </div>

                </div>
              );

            })}

          </div>

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="erp-help-modal-footer">

          <div className="erp-help-modal-footer-info">

            <span />

            {items.length}{" "}
            {items.length === 1
              ? "function"
              : "functions"}{" "}
            in this workflow

          </div>


          <button
            type="button"
            onClick={onClose}
          >
            Done
          </button>

        </div>

      </div>

    </div>
  );
};


export default HelpCenter;