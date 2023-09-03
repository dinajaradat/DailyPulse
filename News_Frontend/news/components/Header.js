import React, { useEffect } from "react";
import { useAuth } from "../context/auth";
import { useApi3 } from "../hooks/useApi";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import SmallHeader from "./SmallHeader";
import Cookies from "js-cookie";
import { FaTemperatureHalf } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import Temp from "./Temp";
import { useRouter } from "next/router";

export default function Header({ isHome }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const location = user?.location;
  const username = user?.username;
  // console.log(user)
  // console.log(location)
  const { dataLo, loadingLo, error } = useApi3(location);

  const handleMode = () => {
    let htmlClasses = document.documentElement.classList;

    if (htmlClasses.contains("dark")) {
      document.documentElement.classList.remove("dark");
      Cookies.remove("dark", "dark");
    } else {
      document.documentElement.classList.add("dark");
      Cookies.set("dark", "dark");
    }
  };
  function handleId() {
    if (Cookies.get("news_id")) {
      Cookies.remove("news_id");
    }
  }
  useEffect(() => {
    if (Cookies.get("dark")) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <SmallHeader />
      <header className="w-full  text-gray-700 bg-bgLight border-t border-b border-gray-300 dark:border-gray-600 shadow-sm body-font dark:bg-bgDark flex items-start justify-around p-8 gap-100  md:flex-row">
        {/* <div className=" flex flex-col items-start justify-around p-8 gap-80  md:flex-row"> */}
        <div className="flex gap-10">
          <a className="flex items-center mb-4  font-medium text-gray-900 title-font md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="150"
              height="50"
            >
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#007bff" />
                  <stop offset="100%" stopColor="#00cc99" />
                </linearGradient>
              </defs>

              <text
                x="50"
                y="30"
                fontFamily="Vina Sans, Arial, sans-serif"
                fontSize="40"
                fontWeight="bold"
                fill="url(#logo-gradient)"
              >
                Daily
              </text>
              <text
                x="50"
                y="70"
                fontFamily="Vina Sans, Arial, sans-serif"
                fontSize="40"
                fontWeight="bold"
                fill="url(#logo-gradient)"
              >
                Pulse
              </text>
            </svg>
          </a>

          <div className=" mt-2  border-gray-200 ">
            <label className="switch">
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input type="checkbox" className="input" onClick={handleMode} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="items-center h-full flex gap-4">
          {user ? (
            <>
              {loadingLo ? (
                <Temp />
              ) : (
                <span className=" py-2 text-l flex gap-2 dark:text-signup  text-gray-900 font-bold">
                  {Math.round(dataLo) - 273}°C
                  <FaTemperatureHalf size={23} />
                </span>
              )}

              <h2 className=" px-2 py-1 text-signup  outline-gray-900  font-bold outline dark:outline-white outline-1 rounded">
                {username.toUpperCase()}
              </h2>

              <a
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 custom-teal-bg rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                {" "}
                {t("common:Logout")}{" "}
              </a>

              <Link
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 custom-teal-bg rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                href="/Profile/ProfileInfo"
              >
                {" "}
                {t("common:profile")}
              </Link>
            </>
          ) : (
            <>
              {/* onClick={() => login("amjad", "1234")} */}
              <Link
                href="/Signin"
                className="mr-5  dark:text-signup  text-gray-900 font-bold"
              >
                {t("common:Login")}
              </Link>

              <Link
                href="/Signup"
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 custom-teal-bg rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              >
                {t("common:signup")}
              </Link>
            </>
          )}
          {isHome ? (
            <></>
          ) : (
            <Link href="/" onClick={handleId}>
              <FaHome size={30} color="#02a8ae" />
            </Link>
          )}
        </div>
        {/* </div> */}
      </header>
    </>
  );
}
