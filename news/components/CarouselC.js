import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import Loader from "./Loader";
import { useEffect } from "react";
import Image from "next/image";

export default function CarouselC({ data, loading }) {
  useEffect(() => {}, [data]);

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <Carousel
          className="rounded-xl"
          dir="ltr"
          autoplay={true}
          autoplayTimeout={3000}
          loop={true}
        >
          {data.articles.slice(0, 3).map((item, i) => (
            <div className="relative h-100 w-full" key={i}>
              <Image
                src={
                  item.urlToImage ||
                  "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
                }
                alt="image 1"
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-xs md:text-4xl lg:text-5xl"
                  >
                    {item.title}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
}
