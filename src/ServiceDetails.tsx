import React from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./ServiceDetails.css";

/* =========================================================
   TYPES
========================================================= */

interface ServiceListItem {
  title: string;
  link: string;
}

interface ServicePlatform {
  title: string;
  description: string;
  technologies?: {
    name: string;
    description: string;
  }[];
  keyFeatures?: string[];
  advantages?: string[];
}

interface Service {
  number: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  link: string;

  servicesList?: ServiceListItem[];

  keyFeatures?: string[];

  advantages?: string[];

  whyUseDevERP?: string[];

  android?: ServicePlatform;

  ios?: ServicePlatform;

  websiteHostingInfo?: {
    title: string;
    description: string;
  };
}

/* =========================================================
   SERVICE DETAILS
========================================================= */

const ServiceDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* =======================================================
     RECEIVE SERVICE DATA
  ======================================================= */

  const service =
    location.state?.service as Service | undefined;

  const services =
    location.state?.services as Service[] | undefined;

  /* =======================================================
     NO SERVICE FOUND
  ======================================================= */

  if (!service) {
    return (
      <section
        className="service-detail-section"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="service-detail-container">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2>Service not found</h2>

            <p>
              Please select a service from our services page.
            </p>

            <button
              type="button"
              onClick={() => navigate("/services")}
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* =======================================================
     SERVICE DATA
  ======================================================= */

  const sidebarServices = services ?? [];

  /* =======================================================
     SIDEBAR SERVICE NAVIGATION
  ======================================================= */

  const handleSidebarNavigation = (
    sidebarService: Service
  ) => {
    /*
      Same service clicked
    */

    if (
      sidebarService.title === service.title
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    /*
      Navigate to service details
      with complete service data
    */

    navigate("/services", {
      state: {
        service: sidebarService,
        services: sidebarServices,
      },
    });

    /*
      Scroll after navigation
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

      <section className="service-detail-hero">

        <div className="service-detail-hero-bg">
          <img
            src="CMSassets/images/it_service/inner_page_banner2.jpg"
            alt="DevERP Services"
          />
        </div>

        <div className="service-detail-hero-overlay" />

        <div className="service-detail-container">

          <div className="service-detail-hero-content">

            <span className="service-detail-eyebrow">
              BUSINESS SERVICES
            </span>

            <h1>SERVICES</h1>

            <p>
              Technology services designed to simplify
              business operations and support digital growth.
            </p>

            {/* Breadcrumb */}

            <div className="service-detail-breadcrumb">

              <button
                type="button"
                onClick={() =>
                  navigate("/")
                }
              >
                Home
              </button>

              <span>/</span>

              <button
                type="button"
                onClick={() =>
                  navigate("/service-list")
                }
              >
                Services
              </button>

              <span>/</span>

              <strong>
                {service.title}
              </strong>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="service-detail-section">

        <div className="service-detail-container">

          <div className="service-detail-layout">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <main className="service-detail-main">

              {/* SERVICE HEADING */}

              <div className="service-detail-heading">

                <span>
                  {service.tag}
                </span>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.description}
                </p>

              </div>

              {/* SERVICE IMAGE */}

              <div className="service-detail-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              {/* =================================================
                  MAIN INTRODUCTION
              ================================================= */}

              <div className="service-content-block">

                <p>
                  {service.description}
                </p>

              </div>

              {/* =================================================
                  ANDROID
              ================================================= */}

              {service.android && (
                <section className="service-platform-section">

                  <div className="service-section-title">

                    <span>
                      MOBILE SOLUTIONS
                    </span>

                    <h3>
                      {service.android.title}
                    </h3>

                  </div>

                  <div className="service-platform-description">

                    <p>
                      {service.android.description}
                    </p>

                  </div>

                  {/* Technologies */}

                  {service.android?.technologies &&
  service.android.technologies.length > 0 && (
    <section className="service-technologies">

      <div className="service-section-title">
        <span>TECHNOLOGY STACK</span>

        <h3>
          Technologies We <strong>Work With</strong>
        </h3>

        <p>
          Modern frameworks and technologies that help us build
          scalable, reliable and high-performance applications.
        </p>
      </div>

      <div className="service-tech-grid">
        {service.android.technologies.map(
          (technology, index) => (
            <div
              className="service-tech-card"
              key={index}
            >

              <div className="service-tech-top">
                <span className="service-tech-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="service-tech-arrow">
                  ↗
                </span>
              </div>

              <div className="service-tech-content">

                <div className="service-tech-dot" />

                <h4>
                  {technology.name}
                </h4>

                <p>
                  {technology.description}
                </p>

              </div>

              <div className="service-tech-line" />

            </div>
          )
        )}
      </div>

    </section>
  )}

                  {/* Android Features */}

              {service.android?.keyFeatures &&
  service.android.keyFeatures.length > 0 && (
    <section className="service-feature-section">

      <div className="service-section-title">
        <span>CORE FEATURES</span>

        <h3>
          Key <strong>Features</strong>
        </h3>

        <p>
          Powerful features designed to simplify operations,
          improve efficiency and deliver a better user experience.
        </p>
      </div>

      <div className="service-feature-grid">
        {service.android.keyFeatures.map(
          (feature, index) => (
            <div
              className="service-feature-item"
              key={index}
            >
              <div className="service-feature-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="service-feature-check">
                <span>✓</span>
              </div>

              <p>{feature}</p>

              <span className="service-feature-arrow">
                →
              </span>
            </div>
          )
        )}
      </div>

    </section>
  )}

                  {/* Android Advantages */}

                  {service.android.advantages &&
                    service.android.advantages.length > 0 && (
                      <div className="service-feature-section">

                        <h4>
                          Advantages
                        </h4>

                        <div className="service-feature-grid">

                          {service.android.advantages.map(
                            (advantage, index) => (
                              <div
                                className="service-feature-item"
                                key={index}
                              >

                                <span>
                                  {String(
                                    index + 1
                                  ).padStart(2, "0")}
                                </span>

                                <p>
                                  {advantage}
                                </p>

                              </div>
                            )
                          )}

                        </div>

                      </div>
                    )}

                </section>
              )}

              {/* =================================================
                  IOS
              ================================================= */}

              {service.ios && (
                <section className="service-platform-section">

                  <div className="service-section-title">

                    <span>
                      MOBILE SOLUTIONS
                    </span>

                    <h3>
                      {service.ios.title}
                    </h3>

                  </div>

                  <div className="service-platform-description">

                    <p>
                      {service.ios.description}
                    </p>

                  </div>

                  {/* Technologies */}

                  {service.ios.technologies &&
                    service.ios.technologies.length > 0 && (
                      <div className="service-tech-grid">

                        {service.ios.technologies.map(
                          (technology, index) => (
                            <div
                              className="service-tech-card"
                              key={index}
                            >

                              <span>
                                {String(
                                  index + 1
                                ).padStart(2, "0")}
                              </span>

                              <h4>
                                {technology.name}
                              </h4>

                              <p>
                                {technology.description}
                              </p>

                            </div>
                          )
                        )}

                      </div>
                    )}

                  {/* iOS Features */}

                  {service.ios.keyFeatures &&
                    service.ios.keyFeatures.length > 0 && (
                      <div className="service-feature-section">

                        <h4>
                          Key Features
                        </h4>

                        <div className="service-feature-grid">

                          {service.ios.keyFeatures.map(
                            (feature, index) => (
                              <div
                                className="service-feature-item"
                                key={index}
                              >

                                <span>
                                  {String(
                                    index + 1
                                  ).padStart(2, "0")}
                                </span>

                                <p>
                                  {feature}
                                </p>

                              </div>
                            )
                          )}

                        </div>

                      </div>
                    )}

                  {/* iOS Advantages */}

                  {service.ios.advantages &&
                    service.ios.advantages.length > 0 && (
                      <div className="service-feature-section">

                        <h4>
                          Advantages
                        </h4>

                        <div className="service-feature-grid">

                          {service.ios.advantages.map(
                            (advantage, index) => (
                              <div
                                className="service-feature-item"
                                key={index}
                              >

                                <span>
                                  {String(
                                    index + 1
                                  ).padStart(2, "0")}
                                </span>

                                <p>
                                  {advantage}
                                </p>

                              </div>
                            )
                          )}

                        </div>

                      </div>
                    )}

                </section>
              )}

              {/* =================================================
                  WEBSITE HOSTING INFO
              ================================================= */}

              {service.websiteHostingInfo && (
                <section className="service-content-block">

                  <div className="service-section-title">

                    <span>
                      HOSTING SOLUTIONS
                    </span>

                    <h3>
                      {service.websiteHostingInfo.title}
                    </h3>

                  </div>

                  <p>
                    {
                      service.websiteHostingInfo
                        .description
                    }
                  </p>

                </section>
              )}

              {/* =================================================
                  KEY FEATURES
              ================================================= */}

              {service.keyFeatures &&
                service.keyFeatures.length > 0 && (
                  <section className="service-features">

                    <div className="service-section-title">

                      <span>
                        CORE CAPABILITIES
                      </span>

                      <h3>
                        Key Features
                      </h3>

                    </div>

                    <div className="service-feature-grid">

                      {service.keyFeatures.map(
                        (feature, index) => (
                          <div
                            className="service-feature-item"
                            key={index}
                          >

                            <span>
                              {String(
                                index + 1
                              ).padStart(2, "0")}
                            </span>

                            <p>
                              {feature}
                            </p>

                          </div>
                        )
                      )}

                    </div>

                  </section>
                )}

              {/* =================================================
                  ADVANTAGES
              ================================================= */}

              {service.advantages &&
                service.advantages.length > 0 && (
                  <section className="service-features">

                    <div className="service-section-title">

                      <span>
                        BUSINESS VALUE
                      </span>

                      <h3>
                        Advantages
                      </h3>

                    </div>

                    <div className="service-feature-grid">

                      {service.advantages.map(
                        (advantage, index) => (
                          <div
                            className="service-feature-item"
                            key={index}
                          >

                            <span>
                              {String(
                                index + 1
                              ).padStart(2, "0")}
                            </span>

                            <p>
                              {advantage}
                            </p>

                          </div>
                        )
                      )}

                    </div>

                  </section>
                )}

              {/* =================================================
                  WHY DevERP
              ================================================= */}

            {service.whyUseDevERP &&
  service.whyUseDevERP.length > 0 && (
    <section className="service-why-dev-erp">

      <div className="service-section-title">
        <span>WHY DevERP</span>

        <h3>
          Why Businesses Choose <strong>DevERP</strong>
        </h3>

        <p>
          Reliable technology, seamless support and business-focused
          solutions designed to help your organization grow.
        </p>
      </div>

      <div className="service-why-grid">
        {service.whyUseDevERP.map((reason, index) => (
          <div
            className="service-why-card"
            key={index}
          >
          

            <div className="service-why-card-content">
              <h4>
                {index === 0 && "Reliable Solution"}
                {index === 1 && "Business Ready"}
                {index === 2 && "Secure & Scalable"}
                {index === 3 && "Expert Support"}
                {index >= 4 && "Built for Growth"}
              </h4>

              <p>{reason}</p>
            </div>
 
          </div>
        ))}
      </div>

    </section>
  )}
              {/* =================================================
                  CTA
              ================================================= */}

              <div className="service-detail-cta">

                <div>

                  <span>
                    NEED A SERVICE?
                  </span>

                  <h3>
                    Let's build the right
                    <br />
                    solution for your business.
                  </h3>

                </div>

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

            </main>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="service-sidebar">

              {/* SIDEBAR CARD */}

              <div className="service-sidebar-card">

                <div className="service-sidebar-header">

                  <div className="sidebar-header-top">

                    <span className="sidebar-header-line" />

                    <span>
                      EXPLORE
                    </span>

                  </div>

                  <h3>
                    Our Services
                  </h3>

                  <p>
                    Technology and business solutions.
                  </p>

                </div>

                {/* SERVICE LIST */}

                <div className="service-sidebar-list">

                  {sidebarServices.map(
                    (sidebarService, index) => {

                      const isActive =
                        sidebarService.title ===
                        service.title;

                      return (
                        <button
                          type="button"
                          key={
                            sidebarService.link ||
                            sidebarService.title
                          }
                          className={`service-sidebar-item ${
                            isActive
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleSidebarNavigation(
                              sidebarService
                            )
                          }
                        >

                          <span className="sidebar-service-number">
                            {String(
                              index + 1
                            ).padStart(2, "0")}
                          </span>

                          <span className="sidebar-service-name">
                            {sidebarService.title}
                          </span>

                          <span className="sidebar-service-arrow">
                            →
                          </span>

                        </button>
                      );

                    }
                  )}

                </div>

              </div>

              {/* SIDEBAR CTA */}

              <div className="service-sidebar-cta">

                <div className="sidebar-cta-label">
                  NEED HELP?
                </div>

                <h3>
                  Looking for the
                  <br />
                  right service?
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

export default ServiceDetails;