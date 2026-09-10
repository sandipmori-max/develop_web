import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import "./StickyActions.css";

const StickyActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky-actions">
      {showTop && (
        <button
          className="sticky-action"
          onClick={moveToTop}
          aria-label="Move to top"
          title="Move to Top"
        >
          <ArrowUp size={20} strokeWidth={2} />
        </button>
      )}

      <button
        className="sticky-action"
        aria-label="Chat"
        title="Chat"
      >
        <MessageCircle size={20} strokeWidth={2} />
      </button>

      <button
        className="sticky-action"
        aria-label="Call"
        title="Call"
      >
        <Phone size={20} strokeWidth={2} />
      </button>

      <button
        className="sticky-action"
        aria-label="Email"
        title="Email"
      >
        <Mail size={20} strokeWidth={2} />
      </button>
    </div>
  );
};

export default StickyActions;