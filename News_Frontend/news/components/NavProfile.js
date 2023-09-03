import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';

export default function NavProfile({ setCategory, catgory }) {
  const { t } = useTranslation();

  const router = useRouter();

  useEffect(() => {
    // When the user scrolls the page, execute myFunction
    window.addEventListener("scroll", handleScroll);

    // Get the navbar
    let navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    // let sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function handleScroll() {
      if (window.scrollY >= 155) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []);

  return (
    <div
      id="navbar"
      className="nav flex justify-center z-50 bg-bgLight dark:bg-bgDark  pb-2 outline  outline-1 text-gray-900 dark:text-fontDark outline-cyan-600 dark:outline-cyan-100"
    >
      <div className="nav-links flex justify-center">
        <Link
          href="/Profile/MyNews"
          style={
            router.pathname == "/Profile/MyNews" ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}
          }
        >
        {t("common:mynews")}
        </Link>
        <Link
          href="/Profile/ReadingList"
          style={
            router.pathname == "/Profile/ReadingList"
              ? { backgroundColor: "rgba(0, 0, 0, 0.3)" }
              : {}
          }
        >
      {t("common:read")}
        </Link>
        <Link
          href="/Profile/ProfileInfo"
          style={
            router.pathname == "/Profile/ProfileInfo"
              ? { backgroundColor: "rgba(0, 0, 0, 0.3)" }
              : {}
          }
        >
       {t("common:profile")}
        </Link>
      </div>
    </div>
  );
}
