const LoginPage = () => {
  const STYLE = {
    form: `bg-[#DADACA] grid grid-rows-3 h-screen px-5`,
    heading: `text-3xl text-center my-4 text-[#8F8F7A]`,
    label: `m-2 text`,
    input: `bg-white w-full p-1 border-b-2 border-[#8F8F7A]`,
    button: `bg-white w-[200px] self-center rounded-full p-2 text-[#8F8F7A] border-[#8F8F7A] border-2 text-xl`,
  };

  return (
    <form className={STYLE.form}>
      <h2 className={STYLE.heading}>Login</h2>

      <div className="flex flex-col items-center gap-1">
        <label htmlFor="Email">Email-Adresse</label>
        <input
          type="text"
          placeholder="example@mail.de"
          className={STYLE.input}
        />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="●●●●●●●" className={STYLE.input} />
      </div>

      <div className="m-auto">
        <button className={STYLE.button}>Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
