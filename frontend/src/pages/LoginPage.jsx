const LoginPage = () => {
  const STYLE = {
    form:`p-2 flex flex-col`,
    heading: `text-4xl text-center`,
    label: ``,
    input: `p-2 m-2 text-center bg-blue-100 rounded`,
    button: `bg-blue-500 w-[200px] self-center rounded p-2 text-white`,
  };

  return (
    <form className={STYLE.form}>
      <h2 className={STYLE.heading}>Login</h2>
      {/* <label htmlFor="">Username</label> */}
      <input type="text" placeholder="Username" className={STYLE.input}/>
      <input type="text" placeholder="Password" className={STYLE.input}/>

      <button className={STYLE.button}>Login</button>
    </form>
  );
};

export default LoginPage;
