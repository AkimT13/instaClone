import { IoMdHome } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="flex items-center justify-start flex-col w-64 border border-slate-300">
      <img src="instablacklogo.png" className="  w-40 p-5 pb-6" />
      <button className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Home </span>
      </button>
      <button className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Search </span>
      </button>
      <button className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Explore </span>
      </button>
      <button className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Reels </span>
      </button>
      <button className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Messages </span>
      </button>
      <button className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Notifications </span>
      </button>
      <button className="flex hover:bg-gray-200 rounded-md w-60 text-left p-3 font-bold gap-2">
        <IoMdHome fontSize={30} />
        <span className="mt-1 text-md">Create </span>
      </button>
    </div>
  );
};

export default Sidebar;
