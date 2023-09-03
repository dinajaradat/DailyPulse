import { Parent } from "@/components/Parent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default function Aboutus() {
  const { t } = useTranslation();
  return (
    <>
      <Parent>
        {/* <div class="min-h-screen bg-white">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"> */}
        <div
          className=" md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12   px-80 bg-bgLight dark:bg-bgDark"
          style={{ minHeight: "70vh" }}
        >
          <div className="md:7/12 lg:w-6/12 font-serif">
            <h2 className="text-6xl text-gray-900 font-bold md:text-4xl dark:text-fontDark">
              {t("common:AboutApp")}
            </h2>
            <p className="mt-6 text-gray-600 dark:text-fontDark">
              {t("common:aboutpara1")}
            </p>

            <p className="mt-4 text-gray-600 dark:text-fontDark">
              {" "}
              {t("common:aboutpara2")}
            </p>
          </div>
          <div className="md:5/12 lg:w-11/12">
            <Image
              className="rounded"
              src="/aboutusimg.png"
              alt="image"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* </div>
        </div> */}
      </Parent>
    </>
  );
}
