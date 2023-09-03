import React from "react";
import { Chip } from "@material-tailwind/react";
import Image from "next/image";

export default function CardSmall({ item }) {
  return (
    <>
      <div
        className="flex gap-3 h-40 border-gray-900 w-full dark:border-signup"
        style={{ borderBottomWidth: "1px" }}
      >
        <Image
          src={
            item.urlToImage ||
            "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
          }
          alt="nice"
          width="150"
          height="150"
          className="object-scale-down"
        />
        <h3 className="w-2/3 font-bold pt-10 text-lg dark:text-fontDark">
          {/* <span className="px-2  mx-2 bg-gray-600 outline outline-2 outline-signup">
            {item.source.name}
          </span> */}
          <Chip
            value={item.source.name}
            className="dark:bg-bgLight text-center dark:text-gray-900"
          />
          {item.title}
        </h3>
      </div>
    </>
  );
}
