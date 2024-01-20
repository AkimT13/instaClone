import React, { useState, useEffect } from "react";
import { fetchArticles } from "./fetchHeadlines";
import Article from "./Article";

const TopStories = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const articles = await fetchArticles();
        setTopStories(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchTopStories();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="flex flex-col justify-cente gap-5">
      {topStories.map((story, index) => (
        <Article
          key={index}
          date={story.date}
          author={story.author}
          image={story.urlToImage}
          title={story.title}
          url={story.url}
          description={story.description}
        />
      ))}
    </div>
  );
};

export default TopStories;
