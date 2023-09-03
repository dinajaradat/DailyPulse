import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { AiFillEdit } from "react-icons/ai";
import useComment from "@/hooks/useComment";
import { sign } from "jsonwebtoken";

export function UpdateModel({ styles, comment, setNewsComment, news }) {
  const [open, setOpen] = useState(false);
  const { updateComment } = useComment();
  const [newDesc, setNewDesc] = useState(comment.description);

  const handleOpen = () => setOpen(!open);
  const handleUpdate = async () => {
    const x = await updateComment(comment.id, { description: newDesc });
    const filteredComments = await x.filter((e) => e.news === news.id);
    setNewsComment(filteredComments);
    // console.log(x);
    setOpen(!open);
  };

  return (
    <div style={styles}>
      <AiFillEdit
        onClick={handleOpen}
        size={20}
        className="text-signup"
      ></AiFillEdit>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>Edit your Comment</DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input
              label="Comment"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          {/* <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button> */}
          <Button variant="gradient" color="teal" onClick={handleUpdate}>
            Apply Changes
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
