import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3333/api/users/login";

const LoginPage = () => {
  const navigate = useNavigate();
  const STYLE = {
    form: `bg-[#DADACA] grid grid-rows-3 h-screen px-5`,
    heading: `text-3xl text-center my-4 text-[#8F8F7A]`,
    label: `m-2 text`,
    input: `bg-white w-full p-1 border-b-2 border-[#8F8F7A]`,
    button: `bg-white w-[200px] self-center rounded-full p-2 text-[#8F8F7A] border-[#8F8F7A] border-2 text-xl`,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, {
        email: email,
        password: password,
      });

      console.log("Login erfolgreich:", response.data);
      const username = response.data.user.username;
      const token = response.data.token;

      console.log(username, email, token);
      document.cookie = `email=${email}`;
      document.cookie = `username=${username}`;
      document.cookie = `token=${token}`;
      setEmail("");
      setPassword("");

      navigate("/landing");
    } catch (error) {
      if (error.response) {
        console.error("Fehler beim Server:", error.response.data);
      } else {
        console.error(error.message);
      }
    }
  };
  const { t } = useTranslation("common");
  const handleRegisterClick = () => {
    // Hier wird zur Register-Seite navigiert
    navigate("/register");
  };
  return (
    <form onSubmit={handleLogin} className={STYLE.form}>
      <h2 className={STYLE.heading}>{t("loginPage.siteTitle")}</h2>

      <div className="flex flex-col items-center gap-1">
        <label htmlFor="Email">{t("loginPage.label_email")}</label>
        <input
          type="text"
          id="email"
          placeholder="example@mail.de"
          className={STYLE.input}
          onChange={handleEmailChange}
          value={email}
        />
        <label htmlFor="Password">{t("loginPage.label_password")}</label>
        <input
          type="password"
          id=""
          placeholder="●●●●●●●"
          className={STYLE.input}
          onChange={handlePasswordChange}
          value={password}
        />
      </div>

      <div className="m-auto">
        <button className={STYLE.button}>{t("loginPage.btn_login")}</button>
      </div>
      <div className="m-auto">
        <button
          type="button"
          onClick={handleRegisterClick}
          className={STYLE.button}
        >
          {t("registerPage.btn_register")}
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
