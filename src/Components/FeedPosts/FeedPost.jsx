import { useState } from "react";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

const FeedPost = ({ author, img, avatar, articleContnent, link }) => {
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
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 ">
          <img
            className="w-8 h-8 rounded-full -translate-y-1"
            src={avatar}
            alt="Rounded avatar"
          />
          <div className="flex gap-2 ">
            <p className="font-bold">{author}</p>
            <p>• 7w</p>
          </div>
        </div>
        <p className="text-blue-500 font-bold hover:text-black transition ease-in-out delay-75 cursor-pointer ">
          Unfollow
        </p>
      </div>

      <img src={img} className="   aspect-[4/5] rounded-sm object-cover" />

      <div className="flex justify-between">
        <div className="flex gap-5">
          {!liked ? (
            <FaRegHeart
              fontSize={25}
              onClick={handleLike}
              className="cursor-pointer"
            />
          ) : (
            <FaRegHeart
              fontSize={25}
              fill={"red"}
              onClick={handleLike}
              className=" cursor-pointer"
            />
          )}

          <FaRegComment fontSize={25} />
          <LuSend fontSize={25} />
        </div>
        <FaRegBookmark fontSize={25} className="cursor-pointer" />
      </div>
      <div className="font-bold"> {likes} likes</div>
      <div className=" w-96">
        <p className="">
          <span className="font-bold text-black cursor-pointer">Username </span>
          Ooooh look at me taking a little photo
        </p>
      </div>
      <p className=" cursor-pointer text-gray-500">View all 11 comments</p>
      <input
        placeholder="Add a comment"
        className="bg-whiteBg border-b border-slate-400 focus:border-slate-400 focus:outline-none "
      />
    </div>
  );
};

export default FeedPost;
