import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const STYLE = {
    container: `h-screen bg-[#DADACA] grid grid-rows-5 items-center justify-items-center`,
    headingContainer: ``,
  };
  const { t } = useTranslation("common");
  return (
    <div className={STYLE.container}>
      <div className="row-span-3">
        <h2 className="text-2xl">{t("notFoundPage.text_notFound")}</h2>
      </div>
      <div className="text-center">
        <Link to="/">{t("notFoundPage.btn_returnToHome")}</Link>
        <p>{t("notFoundPage.label_error-code")}</p>
      </div>
    </div>
  );
};

export default NotFound;
