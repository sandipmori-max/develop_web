import React from "react";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./BookDemoButton.css";

const BookDemoButton = () => {
  const navigate = useNavigate();

   const moveToTop = () => {
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  const duration = 100; // animation speed - 1200ms

  const easeInOutCubic = (t: number) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(
      0,
      startPosition * (1 - easedProgress)
    );

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};


  const handleBookDemo = () => {
    moveToTop()
    navigate("/book-demo");
  };

  return (
    <button
      className="book-demo-sticky"
      onClick={handleBookDemo}
      type="button"
    >
      <CalendarDays size={20} strokeWidth={2} />
      <span>Book Free Demo</span>
    </button>
  );
};

export default BookDemoButton;