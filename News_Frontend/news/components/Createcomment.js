import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";

export default function Createcomment({ handlecreate }) {
  const [comment, setComment] = useState("");
  const commObj = {
    description: comment,
  };

  const handleClick = () => {
    handlecreate(commObj);
    setComment("");
  };
  return (
    <div className="relative w-[32rem]">
      <Textarea
        variant="static"
        placeholder="Your Comment"
        rows={8}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="flex w-full justify-between py-1.5">
        <div className="flex gap-2">
          <Button
            size="sm"
            className="rounded-md dark:bg-white dark:text-black"
            onClick={handleClick}
          >
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
