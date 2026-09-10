import { useEffect } from "react";

const ScrollReveal = () => {
    useEffect(() => {
        const selector = `
    .scroll-reveal,

  .cta-slide-left,
  .cta-slide-right,

  .service-hero-slide-left,
  .service-hero-slide-right,
  .service-scroll-left,
  .service-scroll-right,
  .service-card-reveal,
  .service-cta-left,
  .service-cta-right,

  .product-hero-slide-left,
  .product-hero-slide-right,
  .product-scroll-left,
  .product-card-reveal,
  .product-cta-slide-left,
  .product-cta-slide-right,

  .about-hero-slide-left,
  .about-hero-slide-right,
  .about-scroll-left,
  .about-content-slide-left,
  .about-content-slide-right,
  .about-value-reveal,
  .about-experience-reveal,
  .about-cta-slide-left,
  .about-cta-slide-right,

  .clients-hero-slide-left,
  .clients-hero-slide-right,
  .clients-scroll-left,
  .clients-scroll-right,
  .clients-stat-reveal,
  .clients-filter-reveal,
  .clients-result-reveal,
  .client-card-reveal,
  .clients-empty-reveal,
  .clients-cta-slide-left,
  .clients-cta-slide-right,

  .career-hero-slide-left,
  .career-hero-slide-right,
  .career-hero-bottom-reveal,
  .career-scroll-left,
  .career-content-slide-left,
  .career-content-slide-right,
  .career-benefit-reveal,
  .career-apply-reveal,
  .career-cta-slide-left,
  .career-cta-slide-right,
  .blog-hero-slide-left,
.blog-hero-slide-right,
.blog-hero-bottom-reveal,
.blog-scroll-left,
.blog-card-reveal,
.blog-cta-slide-left,
.blog-cta-slide-right,
.contact-hero-slide-left,
.contact-hero-slide-right,
.contact-hero-bottom-reveal,
.contact-scroll-left,
.contact-scroll-right,
.contact-scroll-up,
.contact-card-reveal,
.contact-form-slide-left,
.contact-form-slide-right,
.de-footer-reveal-up,
.de-footer-slide-left,
.de-footer-column-reveal,
.de-footer-bottom-reveal
    `;

        const observedElements = new WeakSet<Element>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    } else {
                        entry.target.classList.remove("is-visible");
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -80px 0px",
            }
        );

        const observeElements = () => {
            const elements = document.querySelectorAll(selector);

            elements.forEach((element) => {
                if (!observedElements.has(element)) {
                    observer.observe(element);
                    observedElements.add(element);
                }
            });
        };

        // Initial elements
        observeElements();

        // Detect newly mounted route/page elements
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            mutationObserver.disconnect();
            observer.disconnect();
        };
    }, []);

    return null;
};

export default ScrollReveal;