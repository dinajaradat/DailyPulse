import Card from "@/components/Card";
import Loader from "./Loader";
export default function Catgorysection({ data, loading }) {
  return (
    <div className="dark:bg-bgDark pt-10 bg-bgLight">
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
          <ul className="cards">
            {data.articles.slice(0, 4).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ul>
          <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
          <ul className="cards">
            {data.articles.slice(4, 8).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ul>
          <hr className="mb-6 border-t border-gray-300 dark:border-gray-600" />{" "}
          <ul className="cards">
            {data.articles.slice(8, 12).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
