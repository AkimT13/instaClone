import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
const FeedPost = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 ">
          <img
            className="w-8 h-8 rounded-full -translate-y-1"
            src="/public/PhotoImage.webp"
            alt="Rounded avatar"
          />
          <div className="flex gap-2 ">
            <p className="font-bold">UserNam</p>
            <p>• 7w</p>
          </div>
        </div>
        <p className="text-blue-500 font-bold hover:text-black transition ease-in-out delay-75 cursor-pointer ">
          Unfollow
        </p>
      </div>

      <img src="/PhotoImage.webp" className=" w-96 h-80 rounded-sm" />

      <div className="flex justify-between">
        <div className="flex gap-5">
          <FaRegHeart fontSize={25} />
          <FaRegComment fontSize={25} />
          <LuSend fontSize={25} />
        </div>
        <FaRegBookmark fontSize={25} />
      </div>
    </div>
  );
};

export default FeedPost;
