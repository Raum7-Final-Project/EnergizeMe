import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const styles = {
  section:
    "min-h-screen  max-w-60rem mx-auto  text-center flex flex-col items-center justify-center",
  title: "text-2xl text-[54, 54, 54, 0.441] mb-4",
  formContainer: "w-full max-w-40rem m-0.5 p-0.5 bg-[242, 242, 237]  ",
  input:
    "w-full m-0.5 p-0.5 mb-2  bg-[242, 242, 237] border border-solid border-[#8F8F7A] rounded",
  errorMessage: "text-red-500",
  successMessage: "text-green-500",
  submitButton:
    "text-xl bg-[242, 242, 237] rounded-full border border-solid border-[#8F8F7A] p-2 m-2",
};

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

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      newErrors.general = "Bitte fülle alle Felder aus";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein";
      }

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
    <section className={styles.section} id="contactPage">
      <div className={styles.section} id="contact">
        <h1 className={styles.title}>Schick uns eine Nachricht!</h1>

        <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className={`${styles.input} ${
              errors.name ? styles.errorMessage : ""
            }`}
            placeholder="Dein Name"
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}

          <input
            type="email"
            className={`${styles.input} ${
              errors.email ? styles.errorMessage : ""
            }`}
            placeholder="Deine Email"
            name="email"
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}

          <textarea
            className={styles.input}
            name="message"
            rows="5"
            placeholder="Deine Nachricht"
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message}</p>
          )}

          {errors.general && (
            <p className={styles.errorMessage}>{errors.general}</p>
          )}

          {emailSent && <p className={styles.successMessage}>Email gesendet</p>}

          <button className={styles.submitButton} type="submit" value="Send">
            Senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
