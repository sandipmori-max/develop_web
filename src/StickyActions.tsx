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

  // Contact details
  const phoneNumber = "+91 79 3531 2554";
  const emailAddress = "suresh@deverp.com";
  const whatsappNumber = "+91 79 3531 2554";

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

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleChat = () => {
    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="sticky-actions">

      {/* Move To Top */}
      {showTop && (
        <button
          type="button"
          className="sticky-action"
          onClick={moveToTop}
          aria-label="Move to top"
          title="Move to Top"
        >
          <ArrowUp size={20} strokeWidth={2} />
        </button>
      )}

      {/* WhatsApp / Chat */}
      <button
        type="button"
        className="sticky-action"
        onClick={handleChat}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={20} strokeWidth={2} />
      </button>

      {/* Call */}
      <button
        type="button"
        className="sticky-action"
        onClick={handleCall}
        aria-label="Call DevERP"
        title="Call DevERP"
      >
        <Phone size={20} strokeWidth={2} />
      </button>

      {/* Email */}
      <button
        type="button"
        className="sticky-action"
        onClick={handleEmail}
        aria-label="Email DevERP"
        title="Email DevERP"
      >
        <Mail size={20} strokeWidth={2} />
      </button>

    </div>
  );
};

export default StickyActions;
