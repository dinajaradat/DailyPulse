import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import Createcomment from "./Createcomment";
import { useState, useEffect } from "react";
import useComment from "@/hooks/useComment";
import Loader from "./Loader";
import Cookies from "js-cookie";
import { useAuth } from "@/context/auth";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { UpdateModel } from "./UpdateModel";
import DeleteModel from "./DeleteModel";
import useNews from "@/hooks/useNews";

export default function CommentSection({ title, isSaved, news }) {
  const [newsComment, setNewsComment] = useState(undefined);
  const { fetchCommentNew, createComment } = useComment();
  const { createNews } = useNews();
  const { user } = useAuth();
  const [newNews, setnewNews] = useState({});

  async function handlecreate(commObj) {
    // event.preventDefault();
    if (isSaved.length === 0) {
      const apinew = {
        ...news,
        source: news.source.name,
        url_image: news.urlToImage,
        published_date: news.publishedAt.slice(0, 10),
      };
      const newr = await createNews(apinew);
      setnewNews(newr);

      const obj = {
        user: user.id,
        news: newNews.id,
        newsTitle: encodeURI(news.title),
        userName: user.username,
        description: commObj.description,
      };
      const w = await createComment(obj);
      setNewsComment([w]);
    } else {
      const obj = {
        user: user.id,
        news: news.id,
        newsTitle: encodeURI(news.title),
        userName: user.username,
        description: commObj.description,
      };

      const w = await createComment(obj);
      setNewsComment((prev) => [...prev, w]);
    }
  }

  useEffect(() => {
    async function get_comments() {
      // console.log("title is coming ", title);
      const x = await fetchCommentNew(title);
      setNewsComment(x);
      // console.log(x);
    }
    get_comments();
  }, [newNews, fetchCommentNew, title]);

  return (
    <>
      {!newsComment ? (
        <Loader />
      ) : (
        <Timeline>
          {newsComment.map((comment) => (
            <TimelineItem key={comment.id}>
              <TimelineConnector />
              <TimelineHeader className="h-3 ">
                <TimelineIcon className="dark:bg-signup" />
                <Typography
                  variant="h6"
                  // color="blue-gray"
                  className="leading-none dark:text-fontDark"
                >
                  {comment.userName}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gary"
                  className="font-normal text-gray-600 dark:text-gray-300"
                >
                  {comment.description}
                </Typography>
                <UpdateModel
                  styles={{ position: "absolute", left: "38rem", top: "0rem" }}
                  comment={comment}
                  setNewsComment={setNewsComment}
                  news={news}
                />
                <FaTrash
                  className="text-red-700 absolute top-0"
                  style={{ position: "absolute", left: "40rem", top: "0rem" }}
                  size={18}
                />
                <DeleteModel
                  styles={{ position: "absolute", left: "40rem", top: "0rem" }}
                  comment={comment}
                  setNewsComment={setNewsComment}
                  news={news}
                />
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      )}
      <Createcomment handlecreate={handlecreate} />
    </>
  );
}
