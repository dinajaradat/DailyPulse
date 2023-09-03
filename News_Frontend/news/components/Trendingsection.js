import Card from "@/components/Card";
import { useApi, useApi2 } from "../hooks/useApi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Trendingsection() {
  const { data } = useApi("trending");
  const { dataAr } = useApi2("now", "ar");
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data, dataAr]);

  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40">
      {" "}
      <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
      <h1 className="text-2xl dark:text-white text-black flex">
        {" "}
        <span className="w-4 bg-black mx-2 title_box"> </span>
        {t("home:trending_cat") === "Trending" ? (
          <>
            {t("home:trending_cat")}
            <span className="pt-1 pl-1">
              <FaAngleRight />{" "}
            </span>
          </>
        ) : (
          <>
            {t("home:trending_cat")}
            <span className="pt-1 pl-1">
              <FaAngleLeft />{" "}
            </span>
          </>
        )}
        {/* Trending{" "}
            <span className="pt-1 pl-1">
              {" "}
              <FaAngleRight />{" "}
            </span>{" "} */}
      </h1>
      {!dataAr ? (
        <Loader />
      ) : (
        <>
          <ul className="cards  ">
            {Cookies.get("lang") ? (
              <>
                {dataAr.articles.slice(0, 4).map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </>
            ) : (
              <>
                {data.articles.slice(0, 4).map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
