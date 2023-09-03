import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function NavBar({ setCategory, catgory }) {
  const { t } = useTranslation();
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
      className="nav flex justify-center z-50 bg-bgLight dark:bg-bgDark text-gray-900 dark:text-fontDark pb-2 outline  outline-1  outline-cyan-600 dark:outline-cyan-100"
    >
      <div className="nav-links flex justify-center">
        <Link
          href="/"
          onClick={() => setCategory("all")}
          style={
            catgory == "all" ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}
          }
        >
          {t("home:home")}
        </Link>
        <Link
          href="/"
          onClick={() => setCategory("News")}
          style={
            catgory == "News" ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}
          }
        >
          {t("home:news_cat")}
        </Link>
        <Link
          href="/"
          onClick={() => setCategory("Entertainment")}
          style={
            catgory == "Entertainment"
              ? { backgroundColor: "rgba(0, 0, 0, 0.3)" }
              : {}
          }
        >
          {t("home:enter_cat")}
        </Link>
        <Link
          href="/"
          onClick={() => setCategory("Sports")}
          style={
            catgory == "Sports" ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}
          }
        >
          {t("home:sport_cat")}
        </Link>
        <Link
          href="/"
          onClick={() => setCategory("Technology")}
          style={
            catgory == "Technology"
              ? { backgroundColor: "rgba(0, 0, 0, 0.3)" }
              : {}
          }
        >
          {t("home:tech_cat")}
        </Link>
        <Link
          href="/"
          onClick={() => setCategory("Energy")}
          style={
            catgory == "Energy" ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : {}
          }
        >
          {t("home:eng_cat")}
        </Link>
        <Link
          href="/"
          onClick={() => setCategory("Trending")}
          style={
            catgory == "Trending"
              ? { backgroundColor: "rgba(0, 0, 0, 0.3)" }
              : {}
          }
        >
          {t("home:trending_cat")}
        </Link>
      </div>
    </div>
  );
}
