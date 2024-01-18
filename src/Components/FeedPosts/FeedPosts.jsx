import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <div className=" grid gap-4 pt-1 pr-5 ">
      <FeedPost
        username="user1"
        img="/PhotoImage.webp"
        avatar="/PhotoImage.webp"
      />
      <FeedPost
        username="user2"
        img="/PhotoImage.webp"
        avatar="/PhotoImage.webp"
      />
      <FeedPost
        username="user3"
        img="/PhotoImage.webp"
        avatar="/PhotoImage.webp"
      />
      <FeedPost
        username="user4"
        img="/PhotoImage.webp"
        avatar="/PhotoImage.webp"
      />
    </div>
  );
};

export default FeedPosts;
