import axios from "axios";
import React, { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import Cookies from "js-cookie";

import Dropdown from "./Dorpdown";

export default function SmallHeader() {
  const [date, setDate] = useState({ datetime: "" });
  const { t } = useTranslation();
  const monthes = [
    "",
    t("home:January"),
    t("home:February"),
    t("home:March"),
    t("home:April"),
    t("home:May"),
    t("home:June"),
    t("home:July"),
    t("home:August"),
    t("home:September"),
    t("home:October"),
    t("home:November"),
    t("home:December"),
  ];
  const days = [
    t("home:Sunday"),
    t("home:Monday"),
    t("home:Tuesday"),
    t("home:Wednesday"),
    t("home:Thursday"),
    t("home:Friday"),
    t("home:Saturday"),
  ];

  async function getDate() {
    const response = await axios.get(
      "https://worldtimeapi.org/api/timezone/Asia/Amman"
    );
    setDate(response.data);
    // console.log(response.data);
  }

  useEffect(() => {
    getDate();
  }, []);
  const y = date.datetime.slice(0, 10).split("-")[0];
  const m = date.datetime.slice(0, 10).split("-")[1];
  const d = date.datetime.slice(0, 10).split("-")[2];
  return (
    <header className="p-2 flex justify-between bg-gray-800 ">
      <div className="px-16">
        <Dropdown />
      </div>
      <div className="flex gap-1 px-10 text-white">
        <p>{days[date.day_of_week]}</p>
        <p>- {d}</p>
        <p>- {monthes[Number(m)]}</p>
        <p>- {y}</p>
      </div>
    </header>
  );
}
