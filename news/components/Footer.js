import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-bgLight py-9 border-t border-gray-900 dark:border-bgLight dark:bg-bgDark ">
      <div className="  flex items-center justify-around ">
        {/* Left Section */}
        <div className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="150"
            height="50"
          >
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#007bff" />
                <stop offset="100%" stopColor="#00cc99" />
              </linearGradient>
            </defs>

            <text
              x="10"
              y="40"
              fontFamily="Vina Sans, Arial, sans-serif"
              fontSize="40"
              fontWeight="bold"
              fill="url(#logo-gradient)"
            >
              Daily
            </text>
            <text
              x="10"
              y="80"
              fontFamily="Vina Sans, Arial, sans-serif"
              fontSize="40"
              fontWeight="bold"
              fill="url(#logo-gradient)"
            >
              Pulse
            </text>
          </svg>
        </div>

        {/* Middle Section */}
        <div className="text-white text-center">
          <Link href="/Aboutus">
            <p className="mb-2 text-gray-900 dark:text-fontDark font-bold">
              {t("common:AboutUs")}
            </p>
          </Link>
          <Link href="/Ourteam">
            <p className="text-gray-900 dark:text-fontDark font-bold">
              {t("common:OurTeam")}
            </p>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-6 h-6 text-gray-900 dark:text-fontDark"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 text-gray-900 dark:text-fontDark"
              />
            </a>
          </div>
          <div className=" ">
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 h-6 text-gray-900 dark:text-fontDark"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
