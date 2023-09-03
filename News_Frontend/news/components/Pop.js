import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { BsTextIndentLeft } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import useReadingList from "@/hooks/useReadingLater";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Pop({ item, isReadingList }) {
  const { createReadingLater, deleteReadingLater } = useReadingList();
  const { user } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function handleClick(item) {
    if (isReadingList) {
      deleteReadingLater(item.id);
      setOpen(false);
    } else {
      if (user) {
        if (!item.id) {
          const obj = {
            description: item.description,
            content: item.content,
            author: item.author,
            title: item.title,
            url: item.url,
            user: user.id,
            source: item.source.name,
            url_image: item.urlToImage,
            published_date: item.publishedAt.slice(0, 10),
          };
          // console.log(obj);
          createReadingLater(obj);
        }
        createReadingLater({
          ...item,
          user: user.id,
        });

        setOpen(false);
      } else {
        router.push("/Signin");
      }
    }
  }

  return (
    <Popover placement="bottom" open={open}>
      <PopoverHandler
        onClick={() => setOpen(!open)}
        className="dark:bg-bgLight bg-signup"
      >
        <Button>
          {isReadingList ? (
            <span className="dark:text-gray-900">
              <FaTrash size={23} />
            </span>
          ) : (
            <span className="dark:text-gray-900">
              <BsTextIndentLeft size={23} />
            </span>
          )}
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-72 ">
        <List className="p-0">
          <ListItem className="text-initial " onClick={() => handleClick(item)}>
            <ListItemPrefix>
              {isReadingList ? (
                <FaTrash size={23} />
              ) : (
                <BsTextIndentLeft size={23} />
              )}
            </ListItemPrefix>
            {isReadingList ? "Delete" : "Add to ReadLater"}
          </ListItem>
        </List>
      </PopoverContent>
    </Popover>
  );
}
