import Image from "next/image";

export default function Usernew({ item }) {
  return (
    <div className="w-4/6 mt-10">
      <section className=" dark:bg-bgDark dark:text-gray-100">
        <div className="container p-6  space-y-8">
          <div>
            <article className="flex flex-col dark:bg-bgDark">
              <a rel="noopener noreferrer" href={item.url}>
                <Image
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={
                    item.url_image ||
                    "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
                  }
                  width={1000}
                  height={1000}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                <a
                  rel="noopener noreferrer"
                  href={item.url}
                  className="text-xs tracki uppercase hover:underline dark:text-violet-400"
                >
                  {item.source}
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  {item.title}
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>{item.published_date}</span>
                  {/* <span>2.1K views</span> */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
