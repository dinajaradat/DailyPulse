import React from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";
import Pop from "./Pop";
import Image from "next/image";

export default function Card({ item, isReadingList }) {
  const { user } = useAuth();
  const router = useRouter();

  function singleNew(item) {
    if (!user) {
      router.push("/Signin");
      return;
    }

    Cookies.set("news", JSON.stringify(item));
    if (item.id) {
      Cookies.set("news_id", JSON.stringify(item.id));
    }
    router.push("/SingleNew");
  }

  return (
    <li className="cards_item dark:bg-bgDark pt-10 bg-bgLight card-hover">
      <div>
        <div className="card_news">
          <div className="">
            <Image
              src={
                item.urlToImage ||
                item.url_image ||
                "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
              }
              alt="potato"
              onClick={() => singleNew(item)}
              width={1000}
              height={1000}
              className="max-h-107 min-w-full "
            />
          </div>
          <div className="card_content_news ">
            <div className="h-40">
              <p className="card_title dark:text-white text-black ">
                {item.title}
              </p>
            </div>
            <div className="place-self-end ">
              <Pop item={item} isReadingList={isReadingList} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-hover {
          transition: transform 0.3s ease, border 0.3s ease;
        }

        .card-hover:hover {
          transform: scale(1.05);
          border: 2px solid #ccc; /* Subtle gray color */
          border-radius: 10px; /* Rounded border */
        }
      `}</style>
    </li>
  );
}
