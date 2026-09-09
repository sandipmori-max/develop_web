import { useState } from "react";
import "./CareerCulture.css";

type GalleryGroup = {
  title: string;
  images: string[];
};

const galleryGroups: GalleryGroup[] = [
  {
    title: "Celebrations @ DevERP",
    images: [
      "./CMSassets/images/Event-Photos/diwali-celebration(22).jpg",
      "./CMSassets/images/Event-Photos/diwali-celebration(1).jpg",
      "./CMSassets/images/Event-Photos/diwali-celebration(21).jpg",
      "./CMSassets/images/Event-Photos/diwali-celebration(20).jpg",
      "./CMSassets/images/Event-Photos/Rajwadu-img(1).jpg",
      "./CMSassets/images/Event-Photos/Rajwadu-img(5).jpg",
    ],
  },
  {
    title: "Celebrations @ DevERP",
    images: [
      "./CMSassets/images/Event-Photos/diwali-celebration(19).jpg",
      "./CMSassets/images/Event-Photos/diwali-celebration(2).jpg",
      "./CMSassets/images/Event-Photos/diwali-celebration(14).jpg",
      "./CMSassets/images/Event-Photos/diwali-celebration(17).jpg",
      "./CMSassets/images/Event-Photos/Rajwadu-img(6).jpg",
      "./CMSassets/images/Event-Photos/Rajwadu-img(3).jpg",
    ],
  },
];

const accordionItems = [
  {
    id: "healthy",
    icon: "▥",
    title: "HEALTHY ENVIRONMENT",
    content:
      "Staying active for longer consecutive hours may not be possible for everyone and therefore we always find time to play games and develop crazy ideas on the go.",
  },
  {
    id: "celebration",
    icon: "★",
    title: "CELEBRATION",
    content: "gallery",
  },
  {
    id: "learn",
    icon: "✈",
    title: "LEARN & GROW",
    content:
      "We ensure our team stays updated with the latest, by providing opportunities to expand and improve your skills.",
  },
  {
    id: "company",
    icon: "▥",
    title: "OWN THE COMPANY",
    content:
      "We encourage each member of our team to take responsibility and liability of the projects they are working on.",
  },
];

export default function CareerCulture() {
  const [activeItem, setActiveItem] = useState("healthy");

  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const openGallery = (galleryIndex: number, imageIndex = 0) => {
    setActiveGallery(galleryIndex);
    setActiveImage(imageIndex);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setActiveGallery(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    if (activeGallery === null) return;

    const images = galleryGroups[activeGallery].images;

    setActiveImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    if (activeGallery === null) return;

    const images = galleryGroups[activeGallery].images;

    setActiveImage(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <section className="career-culture-section">
        <div className="career-culture-container">
          <div className="career-culture-grid">
            {/* LEFT */}
            <div className="culture-content">
              <div className="section-intro">
                <span className="section-kicker">LIFE AT DEVERP</span>

                <h2>
                  More than a workplace.
                  <span> A place to grow.</span>
                </h2>

                <p>
                  We believe great work happens when people have the freedom
                  to learn, collaborate, celebrate and take ownership.
                </p>
              </div>

              <div className="culture-accordion">
                {accordionItems.map((item, index) => {
                  const isActive = activeItem === item.id;

                  return (
                    <div
                      className={`culture-item ${
                        isActive ? "is-active" : ""
                      }`}
                      key={item.id}
                    >
                      <button
                        type="button"
                        className="culture-header"
                        onClick={() =>
                          setActiveItem(isActive ? "" : item.id)
                        }
                        aria-expanded={isActive}
                      >
                        <span className="culture-title-wrap">
                          <span className="culture-icon">
                            {item.icon}
                          </span>

                          <span className="culture-title">
                            {item.title}
                          </span>
                        </span>

                        <span className="culture-number">
                          0{index + 1}
                        </span>

                        <span className="culture-arrow">
                          {isActive ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`culture-body ${
                          isActive ? "open" : ""
                        }`}
                      >
                        <div className="culture-body-inner">
                          {item.content === "gallery" ? (
                            <div className="celebration-content">
                              <div className="celebration-heading">
                                <span>Celebrations @ DevERP</span>
                                <small>
                                  Moments that bring the team together
                                </small>
                              </div>

                              <div className="celebration-galleries">
                                {/* Gallery 1 */}
                                <button
                                  type="button"
                                  className="gallery-card gallery-large"
                                  onClick={() => openGallery(0, 0)}
                                >
                                  <img
                                    src={galleryGroups[0].images[0]}
                                    alt="DevERP Diwali celebration"
                                  />

                                  <div className="gallery-overlay">
                                    <span>View Gallery</span>
                                    <strong>→</strong>
                                  </div>
                                </button>

                                {/* Gallery 2 */}
                                <button
                                  type="button"
                                  className="gallery-card gallery-small"
                                  onClick={() => openGallery(1, 0)}
                                >
                                  <img
                                    src={galleryGroups[1].images[0]}
                                    alt="DevERP celebration"
                                  />

                                  <div className="gallery-overlay">
                                    <span>View Gallery</span>
                                    <strong>→</strong>
                                  </div>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <p>{item.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT CAREER CARD */}
            <aside className="career-card">
              <div className="career-card-top">
                <span className="career-badge">CAREER</span>

                <div className="career-icon">
                  ↗
                </div>
              </div>

              <div className="career-card-content">
                <span className="career-eyebrow">
                  JOIN OUR TEAM
                </span>

                <h3>
                  Build your
                  <br />
                  <span>future with us.</span>
                </h3>

                <p>
                  We are passionate about software development and
                  technology solutions. If you are too, this is the right
                  place for you. We take care of work life balance and
                  establish any of the processes keeping employees on mind.
                </p>

                <a
                  href="index.aspx?q=career"
                  className="career-button"
                >
                  <span>Read More</span>
                  <span className="career-button-arrow">→</span>
                </a>
              </div>

              <div className="career-card-decoration">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeGallery !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-counter">
              {activeImage + 1} /{" "}
              {galleryGroups[activeGallery].images.length}
            </div>

            <img
              src={galleryGroups[activeGallery].images[activeImage]}
              alt={`DevERP celebration ${activeImage + 1}`}
            />

            <div className="lightbox-thumbnails">
              {galleryGroups[activeGallery].images.map(
                (image, index) => (
                  <button
                    type="button"
                    key={image}
                    className={`lightbox-thumbnail ${
                      activeImage === index ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </button>
                )
              )}
            </div>
          </div>

          <button
            type="button"
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}