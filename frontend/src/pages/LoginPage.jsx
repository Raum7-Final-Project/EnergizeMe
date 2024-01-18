import { useState } from "react";
import axios from "axios";
/* import { useTranslation } from "react-i18next"; */
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3333/api/users/login";

const LoginPage = () => {
  const navigate = useNavigate();
  const STYLE = {
    form: `bg-slate-200 grid grid-rows-3 h-screen px-5`,
    heading: `text-3xl text-center my-4 text-[#8F8F7A]`,
    label: `m-2 text`,
    input: `bg-white w-full p-1 border-b-2 border-[#8F8F7A]`,
    button: `bg-white w-[200px] self-center rounded-full p-2 text-[#8F8F7A] border-[#8F8F7A] border-2 text-xl`,
    alertBox: `bg-orange-100 border-1-4 border-orange-500 text-orange-700 p-4 mt-5`,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //Input validation
  const validateInputs = () => {
    if (!email || !password) {
      setError("Bitte fülle alle Felder aus.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
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
          setError("Falsche E-Mail-Adresse oder falsches Passwort.");
        } else {
          console.error(error.message);
        }
      }
    }
  };

  const handleRegisterClick = () => {
    // Hier wird zur Register-Seite navigiert
    navigate("/register");
  };
  /* const { t } = useTranslation("common"); */

  return (
    <form onSubmit={handleLogin} className={STYLE.form}>
      <h2 className={STYLE.heading}>Einloggen</h2>

      <div className="flex flex-col items-center gap-1">
        <label htmlFor="Email">E-Mail</label>
        <input
          type="text"
          id="email"
          placeholder="example@mail.de"
          className={STYLE.input}
          onChange={handleEmailChange}
          value={email}
        />
        <label htmlFor="Password">Passwort</label>
        <input
          type="password"
          id=""
          placeholder="●●●●●●●"
          className={STYLE.input}
          onChange={handlePasswordChange}
          value={password}
        />
        {error && (
          <div className={STYLE.alertBox} role="alert">
            <p className="font-bold">Hinweis</p>
            <p>{error}</p>
          </div>
        )}
      </div>

      <div className="m-auto">
        <button className={STYLE.button}>Einloggen</button>
      </div>
      <div className="m-auto">
        <button
          type="button"
          onClick={handleRegisterClick}
          className={STYLE.button}
        >
          Registrieren
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
