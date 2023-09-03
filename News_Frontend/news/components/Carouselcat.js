import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import Loader from "./Loader";
import Image from "next/image";

export default function Carouselcat({ data, loading }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Carousel
          className="rounded-xl bg-bgLight"
          dir="ltr"
          autoplay={true}
          autoplayTimeout={3000}
          loop={true}
        >
          {data.articles.slice(0, 3).map((item, i) => (
            <div className="relative h-full w-full" key={i}>
              <Image
                src={
                  item.urlToImage ||
                  "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
                }
                alt="image 1"
                width={1000}
                height={1000}
                className="object-cover h-full w-full "
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
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
