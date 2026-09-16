import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import "./CenterButton.css";

const CenterButton = () => {
  const [showTop, setShowTop] = useState(false);

  // Contact details
  const phoneNumber = "+91 79 3531 2554";
  const emailAddress = "suresh@deverp.com";
  const whatsappNumber = "917935312554";

  // Social media links
  const instagramUrl = "https://www.instagram.com/deverpsolutions/";
  const facebookUrl = "https://www.facebook.com/people/Dev-Erp/pfbid0c5L4C4vyDHNaM7xVc7yCQJ6hDPKpcka9nEXSLR6axUvw746CMeQyth577wunnnexl/?rdid=xiDd89smsSrQ4FG2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvzjHw1by%2F";
  const twitterUrl = "https://x.com/DevERP5";
  const linkedinUrl = "https://www.linkedin.com/company/deverp-solutions-private-limited";

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

  const handleSocial = (url: string) => {
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="center-sticky-actions">

      {/* Move To Top */}
       
      

      {/* Call */}
     
{
    showTop && <>
      <button
        type="button"
        className="center-sticky-action"
        onClick={() => handleSocial(instagramUrl)}
        aria-label="Instagram"
        title="Instagram"
      >
        <FaInstagram size={19} />
      </button>

      {/* Facebook */}
      <button
        type="button"
        className="center-sticky-action"
        onClick={() => handleSocial(facebookUrl)}
        aria-label="Facebook"
        title="Facebook"
      >
        <FaFacebookF size={18} />
      </button>

      {/* Twitter */}
      <button
        type="button"
        className="center-sticky-action"
        onClick={() => handleSocial(twitterUrl)}
        aria-label="Twitter"
        title="Twitter"
      >
        <FaTwitter size={18} />
      </button>

      {/* LinkedIn */}
      <button
        type="button"
        className="center-sticky-action"
        onClick={() => handleSocial(linkedinUrl)}
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedinIn size={18} />
      </button>
    </>
}
     

      {/* Instagram */}
    

    </div>
  );
};

export default CenterButton;
