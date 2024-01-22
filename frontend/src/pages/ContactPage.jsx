import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contact.css";

const ContactPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    //Check if any field is empty
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      newErrors.general = "Bitte fülle alle Felder aus";
    } else {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein";
      }

      // Validate message
      if (formData.message.trim().length < 10) {
        newErrors.message =
          "Die Nachricht sollte mindestens 10 Zeichen lang sein";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_yj5qftu",
        "template_gfu5u2i",
        form.current,
        "QIbpTOR9vYtlVihU2"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmailSent(true);
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitel"> Schick uns eine Nachricht! </h1>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className={`name ${errors.name ? "error" : ""}`}
            placeholder="Dein Name"
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input
            type="email"
            className={`email ${errors.email ? "error" : ""}`}
            placeholder="Deine Email"
            name="email"
            onChange={handleInputChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <textarea
            className={`msg ${errors.message ? "error" : ""}`}
            name="message"
            rows="5"
            placeholder="Deine Nachricht"
            onChange={handleInputChange}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}

          {errors.general && <p className="error-message">{errors.general}</p>}

          {emailSent && <p className="email-sending"> Email gesendet</p>}

          <button
            className="submitBtn"
            type="submit"
            value="Send"
            style={{ backgroundColor: "#F2F2ED" }}
          >
            Senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
