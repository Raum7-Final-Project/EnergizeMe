import { Link } from "react-router-dom";

const NotFound = () => {
  const STYLE = {
    container: `h-screen bg-[#DADACA] grid grid-rows-5 items-center justify-items-center`,
    headingContainer: ``,
  };
  return (
    <div className={STYLE.container}>
      <div className="row-span-3">
        <h2 className="text-2xl">Oops, could not find the Page</h2>
      </div>
      <div className="text-center">
        <Link to="/">Return Home</Link>
        <p>Error 404</p>
      </div>
    </div>
  );
};

export default NotFound;
