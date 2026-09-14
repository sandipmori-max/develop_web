import React, { useEffect, useState } from "react";
import "./HeroSlider.css";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "CMSassets/images/it_service/slide1.jpg",
    title: "Thinking about ERP?",
    subtitle: "Available On deverp.com",
    link: "index.aspx?q=who-we-are",
  },
  {
    image: "CMSassets/images/it_service/services.jpg",
    title: "Explore wide range of ERP solutions",
    subtitle: "Available On deverp.com",
    link: "index.aspx?q=product_list",
  },
  {
    image: "CMSassets/images/it_service/erp3.jpg",
    title: "Explore wide range of our end-to-end services",
    subtitle: "Available On deverp.com",
    link: "index.aspx?q=service_list",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="hero-slider-track">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === current ? "hero-slide-active" : ""
            }`}
            aria-hidden={index !== current}
          >
            {/* Background Image */}
            <div
              className="hero-slide-image"
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            />

            {/* Dark / Gradient Overlay */}
            <div className="hero-slide-overlay" />

            {/* Content */}
            <div className="hero-slide-container">
              <div className="hero-slide-content">
                <span className="hero-slide-label">
                  DevERP ERP SOLUTIONS
                </span>

                <h1>{slide.title}</h1>

                <p>{slide.subtitle}</p>

                <a
                  href={slide.link}
                  className="hero-slide-button"
                >
                  Explore More
                  <span className="hero-button-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        type="button"
        className="hero-slider-arrow hero-slider-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span>←</span>
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        className="hero-slider-arrow hero-slider-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span>→</span>
      </button>

      {/* Bottom Navigation */}
      <div className="hero-slider-bottom">
        <div className="hero-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-slider-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span />
            </button>
          ))}
        </div>

        <div className="hero-slider-counter">
          <strong>
            {String(current + 1).padStart(2, "0")}
          </strong>

          <span>/</span>

          <span>
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="hero-slider-progress">
        <span
          key={current}
          className={isPaused ? "paused" : ""}
        />
      </div>
    </section>
  );
};

export default HeroSlider;