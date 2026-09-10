import React from "react";
import "./CareerPage.css";

const CareerPage = () => {
  return (
    <main className="career-page">

      {/* =========================
          HERO / INNER BANNER
      ========================== */}
      <section className="career-hero">
        <div className="career-hero-bg">
          <img
            src="https://deverp.com/CMSassets/images/it_service/career.jpg"
            alt="Career at Dev ERP"
          />
        </div>

        <div className="career-hero-overlay" />

        <div className="career-container career-hero-grid">

          {/* HERO LEFT */}
          <div className="career-hero-content career-hero-slide-left">
            <div className="career-hero-label">
              <span></span>
              DEV ERP
            </div>

            <h1>
              CAREER<span>.</span>
            </h1>

            <p>
              Build your future with technology, innovation and great people.
            </p>

            <div className="clients-hero-bottom career-hero-bottom-content">

              <div className="clients-breadcrumb">
                <a href="/">
                  Home
                </a>

                <span>→</span>

                <strong>Clients</strong>
              </div>

              <div className="clients-hero-explore">
                <span />
                EXPLORE OUR CLIENTS
              </div>

            </div>
          </div>

          {/* HERO RIGHT */}
          <div
            className="career-hero-visual career-hero-slide-right"
            aria-hidden="true"
          >
            <div className="career-orbit career-orbit-one"></div>
            <div className="career-orbit career-orbit-two"></div>
            <div className="career-orbit career-orbit-three"></div>

            <div className="career-orbit-center">
              <span>01</span>
              <small>CAREER</small>
            </div>

            <div className="career-vertical-text">
              DEV ERP SOLUTIONS
            </div>
          </div>
        </div>

        <div className="career-hero-bottom career-hero-bottom-reveal">
          <span>PEOPLE</span>
          <span>INNOVATION</span>
          <span>GROWTH</span>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================== */}
      <section className="career-intro">
        <div className="career-container">

          <div className="career-section-heading career-scroll-left">
            <span className="career-eyebrow">
              JOIN OUR TEAM
            </span>

            <h2>
              WE INVITE YOU TO JOIN
            </h2>

            <p>
              DevERP Solutions Pvt Ltd
            </p>
          </div>

          {/* =========================
              MAIN CAREER CONTENT
          ========================== */}
          <div className="career-main-grid">

            {/* LEFT CONTENT */}
            <div className="career-content career-content-slide-left">

              <span className="career-content-number">
                01
              </span>

              <h3>
                Career
              </h3>

              <div className="career-line" />

              <p className="career-description">
                We are passionate about software development and technology
                solutions. If you are too, this is the right place for you.
                We take care of work life balance and establish any of the
                processes keeping employees on mind. Send your resume at{" "}
                <a href="mailto:admin@deverp.com">
                  admin@deverp.com
                </a>
              </p>

              {/* BENEFITS */}
              <div className="career-benefits">

                <div className="career-benefit career-benefit-reveal career-benefit-delay-1">
                  <div className="career-check">
                    ✓
                  </div>

                  <div>
                    <h4>Awesome Co-Workers</h4>
                    <p>
                      Work with talented and supportive people.
                    </p>
                  </div>
                </div>

                <div className="career-benefit career-benefit-reveal career-benefit-delay-2">
                  <div className="career-check">
                    ✓
                  </div>

                  <div>
                    <h4>Transparency From Top To Bottom</h4>
                    <p>
                      An open and transparent work environment.
                    </p>
                  </div>
                </div>

                <div className="career-benefit career-benefit-reveal career-benefit-delay-3">
                  <div className="career-check">
                    ✓
                  </div>

                  <div>
                    <h4>Growth Opportunity</h4>
                    <p>
                      Learn, grow and build your career with us.
                    </p>
                  </div>
                </div>

                <div className="career-benefit career-benefit-reveal career-benefit-delay-4">
                  <div className="career-check">
                    ✓
                  </div>

                  <div>
                    <h4>Competitive Salaries</h4>
                    <p>
                      Get rewarded for your skills and contribution.
                    </p>
                  </div>
                </div>

                <div className="career-benefit career-benefit-reveal career-benefit-delay-5">
                  <div className="career-check">
                    ✓
                  </div>

                  <div>
                    <h4>Company Activities</h4>
                    <p>
                      Enjoy an engaging and collaborative workplace.
                    </p>
                  </div>
                </div>

              </div>

              {/* EMAIL CTA */}
              <div className="career-apply-box career-apply-reveal">

                <div className="career-apply-icon">
                  @
                </div>

                <div className="career-apply-text">
                  <span>Interested in joining us?</span>

                  <a href="mailto:admin@deverp.com">
                    Send Your Resume
                  </a>
                </div>

                <a
                  href="mailto:admin@deverp.com"
                  className="career-apply-arrow"
                >
                  ↗
                </a>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="career-image-wrapper career-content-slide-right">

              <div className="career-image-card">

                <img
                  src="CMSassets/images/it_service/career.jpg"
                  alt="DevERP Career"
                />

                <div className="career-image-overlay" />

                <div className="career-image-caption">
                  <span>YOUR FUTURE</span>
                  <strong>STARTS HERE</strong>
                </div>

              </div>

              <div className="career-floating-card">
                <span>DEV ERP</span>
                <strong>Grow With Us</strong>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================== */}
      <section className="career-bottom-cta">
        <div className="career-container">

          <div className="career-cta-inner">

            <div className="career-cta-content career-cta-slide-left">
              <span className="career-eyebrow">
                LET'S BUILD SOMETHING GREAT
              </span>

              <h2>
                Ready to take the next step?
              </h2>

              <p>
                Join DevERP Solutions and become part of a team
                passionate about technology and innovation.
              </p>
            </div>

            <a
              href="mailto:admin@deverp.com"
              className="career-cta-button career-cta-slide-right"
            >
              Apply Now
              <span>↗</span>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

 export default CareerPage;