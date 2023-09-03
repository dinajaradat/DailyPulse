import { Parent } from "@/components/Parent";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import useComment from "hooks/useComment";
import { useAuth } from "../context/auth";
import useNews from "@/hooks/useNews";
import Link from "next/link";

import { Button, Typography } from "@material-tailwind/react";
import Loader from "@/components/Loader";
import CommentSection from "@/components/CommentSection";
import Post from "@/components/Post";
import Createcomment from "@/components/Createcomment";
import { useAllNews } from "@/hooks/useNews";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default function SingleNew() {
  // const [news, setNews] = useState({});
  const { createComment, fetchCommentNew } = useComment();
  const { allNews } = useAllNews();
  const { createNews } = useNews();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  let news;
  if (Cookies.get("news")) {
    news = JSON.parse(Cookies.get("news"));
    // console.log(news.id);
  }
  const isSaved = allNews?.filter((i) => i.title === news.title);

  async function handlecreate(commObj) {
    // event.preventDefault();
    if (isSaved.length === 0) {
      const newNews = createNews(news);

      const obj = {
        user: user.id,
        news: newNews.id,
        newsTitle: encodeURI(news.title),
        userName: user.username,
        description: commObj.description,
      };
      createComment(obj);
    } else {
      const obj = {
        user: user.id,
        news: isSaved[0].id,
        newsTitle: encodeURI(news.title),
        userName: user.username,
        description: commObj.description,
      };

      const w = await createComment(obj);
      // console.log(w);
    }
  }

  // useEffect(() => {
  //   // const c = fetchCommentNew(news.id);
  //   // setNewsComment(c);
  // }, []);

  return (
    <Parent>
      <div className="flex flex-col gap-14 dark:bg-bgDark bg-bgLight 2xl:px-40 pt-10">
        <Post data={news} />

        <div className="w-[32rem] pl-60 ">
          <CommentSection title={news.title} isSaved={isSaved} news={news} />
        </div>
        {/* <div className="pl-100">
          <Createcomment handlecreate={handlecreate} />
        </div> */}
      </div>
    </Parent>
  );
}
