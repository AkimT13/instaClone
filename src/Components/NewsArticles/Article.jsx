import React from "react";

const Article = ({ date, author, image }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="text-white  text-xs">{date}</p>
      </div>
      <div className="bg-zinc-800 w-[15rem] h-[25rem] border-[.03px] border-gray-500 rounded-lg md:w-[25rem] md:h-[35rem] "></div>
    </div>
  );
};

export default Article;
