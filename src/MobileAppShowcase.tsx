import React, { useEffect, useState } from "react";
import "./MobileAppShowcase.css";

const screenshots = [
  {
    id: 1,
    title: "Dashboard",
    image: "./assets/image/mobile/img0.png",
  },
  {
    id: 2,
    title: "Login",
    image: "./assets/image/mobile/img1.png",
  },
  {
    id: 3,
    title: "Profile",
    image: "./assets/image/mobile/img.png",
  },
  {
    id: 4,
    title: "Patient List",
    image: "./assets/image/mobile/img3.png",
  },
  {
    id: 5,
    title: "Patient Details",
    image: "./assets/image/mobile/img4.png",
  },
  {
    id: 6,
    title: "Appointment",
    image: "./assets/image/mobile/img5.png",
  },
  {
    id: 7,
    title: "Attendance",
    image: "./assets/image/mobile/img6.png",
  },
  {
    id: 8,
    title: "Reports",
    image: "./assets/image/mobile/img7.png",
  },
  {
    id: 9,
    title: "Notifications",
    image: "./assets/image/mobile/img8.png",
  },
  {
    id: 10,
    title: "Settings",
    image: "./assets/image/mobile/img9.png",
  },
];

const AUTO_PLAY_TIME = 2800;
const APP_STORE_URL = "https://apps.apple.com/";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.deverp";
const MobileAppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const total = screenshots.length;

  /*
   * ==========================================
   * PRELOAD ONLY 5 IMAGES
   *
   * Current
   * Previous 2
   * Next 2
   * ==========================================
   */
  useEffect(() => {
    const indexesToPreload = [
      activeIndex,
      (activeIndex - 1 + total) % total,
      (activeIndex - 2 + total) % total,
      (activeIndex + 1) % total,
      (activeIndex + 2) % total,
    ];

    indexesToPreload.forEach((index) => {
      const img = new Image();
      img.src = screenshots[index].image;
    });
  }, [activeIndex, total]);

  /*
   * ==========================================
   * NEXT
   * ==========================================
   */

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  /*
   * ==========================================
   * PREVIOUS
   * ==========================================
   */

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + total) % total
    );
  };

  /*
   * ==========================================
   * GO TO SLIDE
   * ==========================================
   */

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  /*
   * ==========================================
   * AUTO PLAY
   * ==========================================
   */

  useEffect(() => {
    if (isPaused || previewOpen) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % total
      );
    }, AUTO_PLAY_TIME);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, previewOpen, total]);

  /*
   * ==========================================
   * KEYBOARD
   * ==========================================
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveIndex(
          (current) => (current + 1) % total
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) => (current - 1 + total) % total
        );
      }

      if (event.key === "Escape") {
        setPreviewOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [total]);

  /*
   * ==========================================
   * PREVIOUS / NEXT INDEX
   * ==========================================
   */

  const previousIndex =
    (activeIndex - 1 + total) % total;

  const nextIndex =
    (activeIndex + 1) % total;

  return (
    <>
      <section
        className="mobile-app-showcase"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="mobile-showcase-container">

          {/* =================================
              HEADING
          ================================= */}

          <div className="mobile-showcase-heading">

            <span className="mobile-showcase-eyebrow">
              MOBILE APP
            </span>

            <h2>
              Explore the app experience
            </h2>

            <p>
              A simple, intuitive and powerful mobile
              experience designed for everyday business
              operations.
            </p>

          </div>


          {/* =================================
              SHOWCASE
          ================================= */}

          <div className="mobile-showcase-stage">

            {/* LEFT PREVIEW */}

            <button
              type="button"
              className="
                mobile-side-preview
                mobile-side-preview-left
              "
              onClick={previousSlide}
              aria-label="Previous screenshot"
            >
              <div className="mobile-mini-device">

                <img
                  src={
                    screenshots[previousIndex].image
                  }
                  alt={
                    screenshots[previousIndex].title
                  }
                />

              </div>
            </button>


            {/* LEFT ARROW */}

            <button
              type="button"
              className="
                mobile-showcase-arrow
                mobile-showcase-arrow-left
              "
              onClick={previousSlide}
              aria-label="Previous screenshot"
            >
              <span>‹</span>
            </button>


            {/* =================================
                CENTER DEVICE
            ================================= */}

            <div className="mobile-device-wrapper">

              <div
                className="mobile-device"
                onClick={() => setPreviewOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setPreviewOpen(true);
                  }
                }}
              >

                <div className="mobile-device-frame">

                  {/* SPEAKER */}

                  <div className="mobile-device-speaker">
                    <span />
                    <span />
                    <span />
                  </div>


                  {/* CAMERA */}

                  <div className="mobile-device-camera" />


                  {/* =================================
                      SCREEN
                  ================================= */}

                  <div className="mobile-device-screen">

                    <img
                      src={
                        screenshots[activeIndex].image
                      }
                      alt={
                        screenshots[activeIndex].title
                      }
                      className="mobile-active-image"
                    />

                  </div>


                  {/* HOME INDICATOR */}

                  <div className="mobile-device-home-indicator" />

                </div>


                {/* GLOW */}

                <div className="mobile-device-glow" />

              </div>


              {/* CURRENT INFO */}

              <div className="mobile-current-info">

                <span className="mobile-current-number">
                  {String(
                    activeIndex + 1
                  ).padStart(2, "0")}
                </span>

                <span className="mobile-current-line" />

                <span className="mobile-current-title">
                  {
                    screenshots[activeIndex].title
                  }
                </span>

              </div>

            </div>


            {/* RIGHT ARROW */}

            <button
              type="button"
              className="
                mobile-showcase-arrow
                mobile-showcase-arrow-right
              "
              onClick={nextSlide}
              aria-label="Next screenshot"
            >
              <span>›</span>
            </button>


            {/* RIGHT PREVIEW */}

            <button
              type="button"
              className="
                mobile-side-preview
                mobile-side-preview-right
              "
              onClick={nextSlide}
              aria-label="Next screenshot"
            >
              <div className="mobile-mini-device">

                <img
                  src={
                    screenshots[nextIndex].image
                  }
                  alt={
                    screenshots[nextIndex].title
                  }
                />

              </div>
            </button>

          </div>


          {/* =================================
              DOTS
          ================================= */}

          <div className="mobile-showcase-dots">

            {screenshots.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`
                  mobile-showcase-dot
                  ${
                    index === activeIndex
                      ? "active"
                      : ""
                  }
                `}
                onClick={() =>
                  goToSlide(index)
                }
                aria-label={`Go to ${item.title}`}
              />
            ))}

          </div>


          {/* =================================
              COUNTER
          ================================= */}

          <div className="mobile-showcase-counter">

            <span>
              {String(
                activeIndex + 1
              ).padStart(2, "0")}
            </span>

            <span className="counter-divider">
              /
            </span>

            <span>
              {String(total).padStart(2, "0")}
            </span>

          </div>

        </div>

        <div className="mobile-app-store-links">

  {/* APP STORE */}

  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="mobile-store-button"
  >
    <span className="mobile-store-icon">
      
    </span>

    <span className="mobile-store-text">
      <small>Download on the</small>
      <strong>App Store</strong>
    </span>
  </a>


  {/* GOOGLE PLAY */}

  <a
    href={PLAY_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="mobile-store-button"
  >
    <span className="mobile-store-icon mobile-play-icon">
      ▶
    </span>

    <span className="mobile-store-text">
      <small>GET IT ON</small>
      <strong>Google Play</strong>
    </span>
  </a>

</div>
      </section>
{/* =================================
    APP STORE LINKS
================================= */}



      {/* =================================
          FULLSCREEN PREVIEW
      ================================= */}

      {previewOpen && (
        <div
          className="mobile-preview-modal"
          onClick={() =>
            setPreviewOpen(false)
          }
        >

          {/* CLOSE */}

          <button
            type="button"
            className="mobile-preview-close"
            onClick={() =>
              setPreviewOpen(false)
            }
            aria-label="Close preview"
          >
            ×
          </button>


          {/* PREVIOUS */}

          <button
            type="button"
            className="
              mobile-preview-arrow
              mobile-preview-arrow-left
            "
            onClick={(event) => {
              event.stopPropagation();
              previousSlide();
            }}
            aria-label="Previous screenshot"
          >
            ‹
          </button>


          {/* IMAGE */}

          <div
            className="mobile-preview-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={
                screenshots[activeIndex].image
              }
              alt={
                screenshots[activeIndex].title
              }
            />

            <div className="mobile-preview-title">
              {
                screenshots[activeIndex].title
              }
            </div>

          </div>


          {/* NEXT */}

          <button
            type="button"
            className="
              mobile-preview-arrow
              mobile-preview-arrow-right
            "
            onClick={(event) => {
              event.stopPropagation();
              nextSlide();
            }}
            aria-label="Next screenshot"
          >
            ›
          </button>

        </div>
      )}
    </>
  );
};

export default MobileAppShowcase;