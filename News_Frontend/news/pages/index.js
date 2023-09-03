import { Parent } from "@/components/Parent";
import Head from "next/head";
import { useAuth } from "@/context/auth";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Newsection from "@/components/Newsection";
import Trendingsection from "@/components/Trendingsection";
import TechSection from "@/components/TechSection";
import MostComments from "@/components/MostComments";
import NavBar from "@/components/NavBar";
import CatgoryBase from "@/components/CatgoryBase";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import SportSection from "@/components/SportSection";
import Business from "@/components/BusinessSection";
import Entertainment from "@/components/Entertainment";
import Combined from "@/components/Combined";
import Post from "@/components/Post";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");

  useEffect(() => {}, [category]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Parent isHome={true}>
        <NavBar setCategory={setCategory} catgory={category} />

        {category == "all" ? (
          <>
            {/* <HeroSection />
            <Newsection />

            <Trendingsection />
            <TechSection />
            <Combined />

            <SportSection /> */}

            <MostComments />
          </>
        ) : (
          <CatgoryBase catgory={category} />
        )}
      </Parent>
    </>
  );
}
