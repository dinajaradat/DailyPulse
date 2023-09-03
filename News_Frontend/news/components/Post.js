import React from "react";
import { Chip } from "@material-tailwind/react";

const Post = ({ data }) => {
  return (
    <div className="font-serif bg-bgLight dark:bg-bgDark dark:text-fontDark">
      <div className=" relative h-99 mx-46 bg-bgLight ">
        <div
          className="absolute inset-0 bg-cover bg-center  "
          style={{
            backgroundImage: `url(${data.urlToImage || data.url_image})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 right-0 p-5 md:p-8 lg:p-10 xl:p-12 text-white">
          <h1 className="post-title text-center pb-24 px-4 text-4xl md:text-6xl lg:text-6xl xl:text-6xl mb-6 md:mb-10">
            {data.title}
          </h1>
        </div>
      </div>

      <div className="post-body max-w-[50rem] mx-auto px-5 py-5 md:py-8 lg:py-10 xl:py-12 relative ">
        <p className="post-lede font-semibold  absolute -top-64 left-0 right-0 p-5 md:p-8 lg:p-10 xl:p-12 bg-bgLight dark:bg-bgDark rounded-lg">
          <span className="text-2xl">{data.author}</span>
          <br></br>
          <span className="text-xl ">
            {data.published_date || data.publishedAt}
          </span>
          <br></br>
          <br></br>
          <Chip
            value={data.source?.name || data.source}
            className="dark:bg-bgLight text-center dark:text-gray-900 w-fit"
          />
          <br />
          <hr className=" border-t-2 border-gray-600 dark:border-gray-600" />
          <br></br>
          {data.content}
          <Chip
            value={"Read More"}
            className="dark:bg-bgLight text-center bg-cyan-700 dark:text-gray-900 w-fit absolute right-5"
            onTap={() => {
              window.open(
                `${data.url}`,
                "_blank" // <- This is what makes it open in a new window.
              );
            }}
          />
        </p>

        {/* Other paragraphs... */}
      </div>
    </div>
  );
};

export default Post;
