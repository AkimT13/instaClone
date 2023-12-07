import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <div className=" flex flex-col gap-4 overflow-scroll">
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  );
};

export default FeedPosts;
