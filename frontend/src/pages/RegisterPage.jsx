import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
const URL = "http://localhost:3333/api/users";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "value", e.target.value);
  };

  //Input validation
  const validateInputs = () => {
    const { username, email, password } = inputs;

    if (!username || !email || !password) {
      setError("Bitte fülle alle Felder aus.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return false;
    }

    if (password.length < 6) {
      setError("Das Passwort muss mindestens 6 Zeichen lang sein.");
      return false;
    }

    setError("");
    return true;
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post("http://localhost:3333/api/users", {
        username: String(inputs.username),
        email: String(inputs.email),
        password: String(inputs.password),
      });

      if (response.data) {
        const token = response.data.token;
        const id = response.data.user.id;

        navigate(`/verify/${id}/${token}`);
        //navigate("/progress");
      }
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      try {
        await sendRequest();

        setInputs({
          username: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.error("Fehler:", error);
      }
    }
  };
  const STYLE = {
    form: `bg-[#DADACA] grid grid-rows-3 h-screen px-5`,
    label: `m-2 text`,
    input: `bg-white w-full p-1 border-b-2 border-[#8F8F7A]`,
    button: `bg-white w-[200px] self-center rounded-full p-2 text-[#8F8F7A] border-[#8F8F7A] border-2 text-xl`,
  };
  const { t } = useTranslation("common");
  return (
    <>
      {inputs && (
        <form onSubmit={handelSubmit} className={STYLE.form}>
          <h2 className="text-3xl text-center my-4 text-[#8F8F7A]">
            {t("registerPage.siteTitle")}
          </h2>

          <div className="flex flex-col items-center gap-1">
            <label htmlFor="" className="m-1 text-white text-2xl">
              {t("registerPage.say-hello")}
            </label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              className={`${STYLE.input} mb-6`}
              onChange={handelChange}
              value={inputs.username}
            />

            <label htmlFor="Email">{t("registerPage.label_email")}</label>
            <input
              type="text"
              name="email"
              placeholder="example@mail.de"
              className={STYLE.input}
              onChange={handelChange}
              value={inputs.email}
            />
            <label htmlFor="Password">{t("registerPage.label_password")}</label>
            <input
              type="password"
              name="password"
              placeholder="●●●●●●●"
              className={STYLE.input}
              onChange={handelChange}
              value={inputs.password}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <div className="m-auto row-span-1">
            <button type="submit" className={STYLE.button}>
              {t("registerPage.btn_register")}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default RegisterPage;
