import React from "react";
import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import { useState } from "react";
const Article = ({ date, author, image, title, url, description }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        {/*Where the news channel and news logo will go */}
      </div>
      <div className="bg-zinc-900 w-[15rem] h-auto  border-[1px] border-gray-500 rounded-3xl md:w-[25rem] p-3 ">
        <img src={image} className="rounded-t-3xl" />

        <p className="text-white text-2xl p-2 font-Oswald font-medium hover:text-blue-400 ease-in-out duration-500">
          <a href={url} target="_blank" rel="noreferrer">
            {" "}
            {title}
          </a>
        </p>
        <div className="flex justify-between items-center p-2">
          <p className="text-white text-xs font-sans font-medium">
            {" "}
            By: {author}
          </p>
          <p className="text-white text-xs">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
