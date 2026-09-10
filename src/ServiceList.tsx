import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./ServiceList.css";

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "MIS (BI & Reporting)",
    tag: "Business Intelligence",
    image: "CMSassets/images/it_service/mis&Bi.png",
    description:
      "DevERP MIS is an integrated Business Intelligence and Reporting tool service software. Our software collects, integrates, stores, analyses, and also provides access to business information.",
    link: "index.aspx?q=mis(bi_reporting)",
  },
  {
    number: "02",
    title: "Data Export",
    tag: "Data Management",
    image: "CMSassets/images/it_service/data-export.jpg",
    description:
      "DevERP Data Export Service helps you set up data replication to a destination database with export profiles in a very short amount of time.",
    link: "index.aspx?q=data_export",
  },
  {
    number: "03",
    title: "Mobile App Development",
    tag: "Mobile Solutions",
    image: "CMSassets/images/it_service/MobileAppDevelopment.png",
    description:
      "DevERP Mobile Application Development Service covers end-to-end development of mobile apps considering user requirement analysis, UI/UX design, wireframing and designing, mobile application testing and deployment.",
    link: "index.aspx?q=mobile_app_development",
  },
  {
    number: "04",
    title: "Cloud Backup Services",
    tag: "Cloud Solutions",
    image: "CMSassets/images/it_service/Cloud.png",
    description:
      "DevERP Cloud Backup Services provides simple and cost-effective online backup services by automating monitoring and optimisation that makes it easy to secure your files.",
    link: "index.aspx?q=cloud_backUp",
  },
  {
    number: "05",
    title: "SMS Services",
    tag: "Communication",
    image: "CMSassets/images/it_service/sms.jpg",
    description:
      "DevERP SMS Services helps you increase sales and customer satisfaction with smarter SMS campaigns, instant OTPs, notifications, two-way interactions, and other bulk SMS services.",
    link: "index.aspx?q=sms_services",
  },
  {
    number: "06",
    title: "Email Server",
    tag: "Email Solutions",
    image: "CMSassets/images/it_service/email.png",
    description:
      "DevERP Email Server Service is an immensely powerful open-source mail server that can be used for routing and delivering e-mails with secure management system.",
    link: "index.aspx?q=email_server",
  },
  {
    number: "07",
    title: "Domain Registration",
    tag: "Web Services",
    image: "CMSassets/images/it_service/Domain.jpg",
    description:
      "DevERP Domain Registration Service offers a streamlined and simple domain registrar experience with 24/7 expert support, easy access to add-on services and competitive pricing.",
    link: "index.aspx?q=domain_registration",
  },
  {
    number: "08",
    title: "Website Hosting",
    tag: "Infrastructure",
    image: "CMSassets/images/it_service/web-hosting.png",
    description:
      "DevERP Website Hosting Service provides a high quality, reliable hosting service to run a website. Multiple caching layers, auto-scaled memory and isolated servers help improve speed further.",
    link: "index.aspx?q=website_hosting",
  },
  {
    number: "09",
    title: "Web Development",
    tag: "Digital Development",
    image: "CMSassets/images/it_service/web-design.jpg",
    description:
      "DevERP Website Development Service makes it possible to maintain an up-to-date website without spending a fortune. We have proven experience designing websites for clients from different countries.",
    link: "index.aspx?q=web_development",
  },
];

const ServiceList: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <> 

      {/* ================= HERO ================= */}
   <section className="service-page-hero">
  <div className="service-page-hero-bg">
    <img
      src="CMSassets/images/it_service/inner_page_banner2.jpg"
      alt="DevERP Services"
    />
  </div>

  <div className="service-page-hero-overlay" />

  <div className="service-page-hero-glow service-page-hero-glow-one" />
  <div className="service-page-hero-glow service-page-hero-glow-two" />

  <div className="service-page-container">
    <div className="service-page-hero-content">

      <div className="service-page-eyebrow">
        <span className="service-page-eyebrow-line" />
        <span>WHAT WE DO</span>
      </div>

      <h1>
        Smart Technology.
        <span> Powerful Services.</span>
      </h1>

      <p>
        Technology solutions designed to simplify,
        connect and accelerate your business.
      </p>

      <div className="service-page-hero-bottom">

        <div className="service-page-breadcrumb">
          <button
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <span className="breadcrumb-arrow">→</span>

          <strong>Services</strong>
        </div>

        <div className="service-page-hero-scroll">
          <span className="scroll-line" />
          <span>EXPLORE SERVICES</span>
        </div>

      </div>

    </div>

    <div className="service-page-hero-side">

      <div className="hero-side-circle">
        <span>01</span>
      </div>

      <div className="hero-side-text">
        <span>DEV.ERP</span>
        <strong>BUSINESS<br />SOLUTIONS</strong>
      </div>

    </div>
  </div>
</section>

      {/* ================= INTRO ================= */}
      <section className="services-intro">
        <div className="service-page-container">
          <div className="services-intro-grid">

            <div className="services-intro-title">
              <span className="service-section-label">
                OUR SERVICES
              </span>

              <h2>
                Technology that
                <br />
                <span>moves business forward.</span>
              </h2>
            </div>

            <div className="services-intro-text">
              <p>
                From business intelligence and mobile applications
                to cloud, web and communication solutions, DevERP
                provides technology services built around your
                business requirements.
              </p>

              <p>
                Explore our services and discover practical,
                scalable solutions designed to help your business
                work smarter.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICE LIST ================= */}
      <section className="services-list-section">
        <div className="service-page-container">

          <div className="services-list-header">
            <div>
              <span className="service-section-label">
                EXPLORE OUR EXPERTISE
              </span>

              <h2>Solutions built for your business</h2>
            </div>

            <div className="services-count">
              <strong>09</strong>
              <span>Services</span>
            </div>
          </div>

          <div className="services-grid">

            {services.map((service) => (
              <article
                className="modern-service-card"
                key={service.number}
              >

                {/* Image */}
                <div className="modern-service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="modern-service-image-overlay" />

                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-tag">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="modern-service-content">

                  <h3>{service.title}</h3>

                  <p>
                    {service.description}
                  </p>

                  <button
                    type="button"
                    className="service-view-button"
                    onClick={() =>
                      handleServiceClick(service.link)
                    }
                  >
                    <span>View Service</span>

                    <span className="service-arrow">
                      ↗
                    </span>
                  </button>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="service-page-container">
          <div className="services-cta-box">

            <div className="services-cta-content">
              <span className="service-section-label">
                NEED A CUSTOM SOLUTION?
              </span>

              <h2>
                Let's build the right
                <br />
                solution for your business.
              </h2>

              <p>
                Tell us what you are looking to achieve.
                Our team can help you choose the right
                technology and approach.
              </p>
            </div>

            <button
              type="button"
              className="services-cta-button"
              onClick={() => navigate("/contact")}
            >
              <span>Talk to our team</span>
              <span>↗</span>
            </button>

          </div>
        </div>
      </section>
 
    </>
  );
};

export default ServiceList;