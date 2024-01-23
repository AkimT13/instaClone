import {
  IoMdCompass,
  IoMdHome,
  IoMdSearch,
  IoMdHeartEmpty,
} from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { FaFacebookMessenger, FaRegSquarePlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import useLogout from "../hooks/useLogout"

const Sidebar = () => {
  const [handleLogout, isLoggingOut, error] = useLogout();
  return (
    <div className="flex items-center justify-start flex-col w-64 border border-slate-300 gap-4">
      <img src="instablacklogo.png" className="  w-40 p-5 pb-4" />
      <Link></Link>
      <Link
        to="/"
        className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2"
      >
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Home </span>
      </Link>
      <Link className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdSearch fontSize={30} />
        <span className="mt-1 text-md">Search </span>
      </Link>
      <Link className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdCompass fontSize={30} />
        <span className="mt-1 text-md">Explore </span>
      </Link>
      <Link className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <BiMoviePlay fontSize={30} />
        <span className="mt-1 text-md">Reels </span>
      </Link>
      <Link className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <FaFacebookMessenger fontSize={30} />
        <span className="mt-1 text-md">Messages </span>
      </Link>
      <Link className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHeartEmpty fontSize={30} />
        <span className="mt-1 text-md">Notifications </span>
      </Link>
      <Link className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <FaRegSquarePlus fontSize={30} />
        <span className="mt-1 text-md">Create </span>
      </Link>
      <Link
        className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2"
        to="/:username"
      >
        <CgProfile fontSize={30} />
        <span className="mt-1 text-md">Profile </span>
      </Link>
      <div
        className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2"
        onClick={handleLogout}
      >
        <IoLogOutOutline fontSize={30} />
        <span className="mt-1 text-md">Log Out </span>
      </div>
    </div>
  );
};

export default Sidebar;
