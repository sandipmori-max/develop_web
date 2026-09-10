import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-wrapper">
      <div
        className="scroll-progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />

      <div
        className="scroll-progress-glow"
        style={{
          left: `${progress}%`,
        }}
      />

      <div className="scroll-progress-number">
        {Math.round(progress)}
        <span>%</span>
      </div>
    </div>
  );
};

export default ScrollProgress;