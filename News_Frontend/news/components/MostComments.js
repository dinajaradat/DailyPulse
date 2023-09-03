import Card from "@/components/Card";
import useNews from "../hooks/useNews";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "next-i18next";

import Loader from "./Loader";

export default function MostComments() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function allNews() {
    const res = await axios.get(
      "https://news-back-end.vercel.app/api/v1/dailypulse/Get_all_News/"
    );
    setData(res.data);
    setLoading(false);
  }

  useEffect(() => {
    allNews();
  }, []);

  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight 2xl:px-40">
      <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
      <h1 className="text-2xl dark:text-white text-black flex">
        <span className="w-4 bg-black mx-2 title_box"> </span>
        {t("home:comments") === "People Discuss" ? (
          <>
            {t("home:comments")}
            <span className="pt-1 pl-1">
              <FaAngleRight />{" "}
            </span>
          </>
        ) : (
          <>
            {t("home:comments")}
            <span className="pt-1 pl-1">
              <FaAngleLeft />{" "}
            </span>
          </>
        )}
      </h1>{" "}
      {loading ? (
        <Loader />
      ) : (
        <>
          <ul className="cards">
            {data.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
