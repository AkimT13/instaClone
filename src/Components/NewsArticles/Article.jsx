import React from "react";

const Article = ({ date, author }) => {
  return (
    <div className="">
      <p className="text-white">{date} </p>
      <p className="text-white">{author} </p>
    </div>
  );
};

export default Article;
