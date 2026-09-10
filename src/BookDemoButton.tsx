import React from "react";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./BookDemoButton.css";

const BookDemoButton = () => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
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