import React from "react";
import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import { useState } from "react";
const Article = ({ date, author, image, title, url, description }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="text-white  text-xs">{date}</p>
      </div>
      <div className="bg-zinc-800 w-[15rem] h-auto min-h-[25rem] border-[1px] border-gray-500 rounded-3xl md:w-[25rem] md:h-[35rem] ">
        <img src={image} className="rounded-t-3xl" />
        <div className="flex justify-between p-1 border-b-[1px] h-8 border-gray-500 items-center ">
          <div className="flex gap-5">
            {!liked ? (
              <FaHeart
                fontSize={20}
                fill={"white"}
                onClick={handleLike}
                className="cursor-pointer"
              />
            ) : (
              <FaHeart
                fontSize={20}
                fill={"red"}
                onClick={handleLike}
                className=" cursor-pointer"
              />
            )}

            <FaComment fontSize={20} color={"white"} />
            <IoSend fontSize={20} color={"white"} />
          </div>
          <FaBookmark
            fontSize={20}
            className="cursor-pointer"
            color={"white"}
          />
        </div>
        <p className="text-white text-xs p-2 font-sans font-medium">
          <a href={url} target="_blank" rel="noreferrer">
            {" "}
            {title}
          </a>
        </p>
        <p className="text-white text-xs p-2 font-sans font-medium">
          {" "}
          By: {author}
        </p>
        <p className="text-white text-xs p-2 font-sans">{description}</p>
        <p>HBDEDBHEB</p>
      </div>
    </div>
  );
};

export default Article;
