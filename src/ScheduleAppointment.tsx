import React, { useEffect, useState } from "react";
import "./ScheduleAppointment.css";

interface ScheduleAppointmentProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    bname: "",
    subject: "",
    desc: "",
  });

  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "tel") {
      const numericValue = value.replace(/\D/g, "").slice(0, 11);

      setFormData((prev) => ({
        ...prev,
        [id]: numericValue,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (validationMessage) {
      setValidationMessage("");
    }
  };

  const validateForm = () => {
    if (!formData.fname.trim()) {
      setValidationMessage("Please enter your first name.");
      return false;
    }

    if (!formData.lname.trim()) {
      setValidationMessage("Please enter your last name.");
      return false;
    }

    if (!formData.email.trim()) {
      setValidationMessage("Please enter your email address.");
      return false;
    }

    const emailPattern =
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(formData.email)) {
      setValidationMessage("Please enter a valid email address.");
      return false;
    }

    if (!formData.tel.trim()) {
      setValidationMessage("Please enter your phone number.");
      return false;
    }

    if (!formData.bname.trim()) {
      setValidationMessage("Please enter your business name.");
      return false;
    }

    if (!formData.subject.trim()) {
      setValidationMessage("Please enter a subject.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    /*
      Add your existing API / AJAX submission code here.
    */

    setValidationMessage("");

    console.log("Schedule Appointment Data:", formData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="schedule-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="schedule-modal">
        {/* Header */}
        <div className="schedule-modal-header">
          <div>
            <span className="schedule-modal-eyebrow">
              GET IN TOUCH
            </span>

            <h2>Schedule Appoinment</h2>

            <p>
              Fill in your details and our team will get back to you.
            </p>
          </div>

          <button
            type="button"
            className="schedule-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="schedule-modal-body">
          <div className="schedule-form-grid">
            {/* First Name */}
            <div className="schedule-field">
              <label htmlFor="fname">
                First Name<span>*</span>
              </label>

              <input
                id="fname"
                type="text"
                placeholder="Enter first name"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>

            {/* Last Name */}
            <div className="schedule-field">
              <label htmlFor="lname">
                Last Name<span>*</span>
              </label>

              <input
                id="lname"
                type="text"
                placeholder="Enter last name"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="schedule-field">
              <label htmlFor="email">
                Your Email<span>*</span>
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="schedule-field">
              <label htmlFor="tel">
                Your Phone Number<span>*</span>
              </label>

              <input
                id="tel"
                type="tel"
                inputMode="numeric"
                placeholder="Enter phone number"
                value={formData.tel}
                maxLength={11}
                onChange={handleChange}
              />
            </div>

            {/* Business */}
            <div className="schedule-field schedule-field-full">
              <label htmlFor="bname">
                Business Name<span>*</span>
              </label>

              <input
                id="bname"
                type="text"
                placeholder="Enter business name"
                value={formData.bname}
                onChange={handleChange}
              />
            </div>

            {/* Subject */}
            <div className="schedule-field schedule-field-full">
              <label htmlFor="subject">
                Subject<span>*</span>
              </label>

              <input
                id="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className="schedule-field schedule-field-full">
              <label htmlFor="desc">Description</label>

              <textarea
                id="desc"
                placeholder="Tell us more about your requirements..."
                value={formData.desc}
                onChange={handleChange}
                rows={5}
              />
            </div>
          </div>

          {/* Validation */}
          {validationMessage && (
            <div className="schedule-validation">
              <span>!</span>
              {validationMessage}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="schedule-modal-footer">
          <button
            type="button"
            className="schedule-submit-btn"
            onClick={handleSubmit}
          >
            <span>SUBMIT NOW</span>
            <span className="schedule-btn-arrow">→</span>
          </button>

          <button
            type="button"
            className="schedule-cancel-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;