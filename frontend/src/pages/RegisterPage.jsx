import React, { useState } from "react";
import axios from "axios";

const URL = "http://localhost:5554/api/users";

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post(URL, {
        username: String(inputs.username),
        email: String(inputs.email),
        password: String(inputs.password),
      })
      .then((res) => res.data);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

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
  };
  const STYLE = {
    form: `bg-[#DADACA] grid grid-rows-3 h-screen px-5`,
    label: `m-2 text`,
    input: `bg-white w-full p-1 border-b-2 border-[#8F8F7A]`,
    button: `bg-white w-[200px] self-center rounded-full p-2 text-[#8F8F7A] border-[#8F8F7A] border-2 text-xl`,
  };

  return (
    <>
      {inputs && (
        <form onSubmit={handelSubmit} className={STYLE.form}>
          <h2 className="text-3xl text-center my-4 text-[#8F8F7A]">
            Registrieren
          </h2>

          <div className="flex flex-col items-center gap-1">
            <label htmlFor="" className="m-1 text-white text-2xl">
              Hallo,
            </label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              className={`${STYLE.input} mb-6`}
              onChange={handelChange}
              value={inputs.username}
            />

            <label htmlFor="Email">Email-Adresse</label>
            <input
              type="text"
              name="email"
              placeholder="example@mail.de"
              className={STYLE.input}
              onChange={handelChange}
              value={inputs.email}
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="●●●●●●●"
              className={STYLE.input}
              onChange={handelChange}
              value={inputs.password}
            />
          </div>

          <div className="m-auto row-span-1">
            <button type="submit" className={STYLE.button}>
              Registrieren
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default RegisterPage;
