import React from "react";
import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import MoreDetails from "./MoreDetails.jsx";

import { useState } from "react";
const Article = ({ date, author, image, title, url, description, html }) => {
  const [showMore, setShowMore] = useState(false);
  const expand = () => {
    if (showMore == true) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }

    console.log(showMore);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        {/*Where the news channel and news logo will go */}
      </div>
      <div className="bg-zinc-900 w-[15rem] h-auto  border-[1px] border-gray-500 rounded-3xl md:w-[25rem] p-3 ">
        <img src={image} className="rounded-t-3xl" />

        <p
          onClick={expand}
          className="text-white text-2xl p-2 font-Oswald font-medium hover:text-blue-400 ease-in-out duration-500 cursor-pointer"
        >
          {title}
        </p>
        <div className="flex justify-between items-center p-2">
          <p className="text-white text-xs font-sans font-medium">
            {" "}
            By: {author}
          </p>
          <p className="text-white text-xs">{date}</p>
        </div>
        {showMore ? (
          <MoreDetails description={description} html={html} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Article;
