import { Parent } from "@/components/Parent";
import NavProfile from "@/components/NavProfile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useReadingList from "@/hooks/useReadingLater";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { useEffect } from "react";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}
export default function ReadingList() {
  const { GetList } = useReadingList();
  // console.log(GetList);

  return (
    <>
      <Parent>
        <NavProfile />
        <div
          className="bg-bgLight dark:bg-bgDark pt-10  2xl:px-40 "
          style={
            GetList?.length <= 4
              ? {
                  height: "70vh",
                }
              : {}
          }
        >
          {!GetList ? (
            <Loader />
          ) : (
            <ul
              className="cards"
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "143px",
              }}
            >
              <>
                {GetList?.length === 0 ? (
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "80px",
                    }}
                  >
                    <h1 className="text-6xl text-gray-900 dark:text-fontDark">
                      Your List is Empty !
                    </h1>
                  </div>
                ) : (
                  <>
                    {" "}
                    {GetList.map((item, index) => (
                      <Card key={index} item={item} isReadingList={true} />
                    ))}
                  </>
                )}
              </>
            </ul>
          )}
        </div>
      </Parent>
    </>
  );
}
