import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Parent } from "@/components/Parent";
import useNews from "@/hooks/useNews";
import Usernew from "@/components/Usernew";
import Usercomment from "@/components/Usercomment";
import Loader from "@/components/Loader";
import NavProfile from "@/components/NavProfile";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}
export default function MyNews() {
  const { news } = useNews();

  // console.log(news);

  return (
    <div className="dark:bg-bgDark bg-bgLight">
      <Parent>
        <NavProfile />

        {!news ? (
          <div
            style={{
              minHeight: "70vh",
            }}
            className="bg-bgLight dark:bg-bgDark"
          >
            <Loader />
          </div>
        ) : (
          news.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center ml-80 w-3/5"
            >
              <Usernew item={item} />
              <Usercomment new_id={item.id} />
            </div>
          ))
        )}
      </Parent>
    </div>
  );
}
