import { useState } from "react";
import Sidebar from "../../Components/Sidebar";

const ProfilePage = () => {
  const [tab, tabSelect] = useState(0);
  const handleTab = (tabNum) => {
    tabSelect(tabNum);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col items-center w-full">
        <div className=" flex mt-20 ">
          <img src="/PhotoImage.webp" className=" w-40 h-40 rounded-full" />
          <div className="flex flex-col">
            <div className="flex gap-4">
              <p className="  text-2xl p-2 pl-7">User Name</p>
              <button className="text-xl bg-gray-300 p-2 rounded-md font-bold">
                Edit profile
              </button>
              <button className="text-xl bg-gray-300 p-2 rounded-md font-bold">
                View Archive
              </button>
            </div>
            <div className="flex gap-6">
              <p className="text-md p-4 pl-8">
                # <span className="font-bold">Posts</span>
              </p>
              <p className="text-md p-4">
                # <span className="font-bold">Followers</span>
              </p>
              <p className="text-md p-4">
                # <span className="font-bold">Following</span>
              </p>
            </div>
            <p className="font-bold text-md p-4 pl-8">Regular Name</p>
          </div>
        </div>
        <div className="flex justify-center border-t border-t-slate-500 w-[85%] mt-4 gap-6">
          <p
            onClick={() => handleTab(0)}
            className={
              "cursor-pointer " +
              (tab === 0 ? "text-black" : "text-neutral-600")
            }
          >
            POSTS
          </p>
          <p
            onClick={() => handleTab(1)}
            className={
              "cursor-pointer " +
              (tab === 1 ? "text-black" : "text-neutral-600")
            }
          >
            SAVED
          </p>
          <p
            onClick={() => handleTab(2)}
            className={
              "cursor-pointer " +
              (tab === 2 ? "text-black" : "text-neutral-600")
            }
          >
            TAGGED{" "}
          </p>
          <p>{tab}</p>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <img src="/public/PhotoImage.webp" className="w-60 h-60 bg-cover" />
          <img src="/public/PhotoImage.webp" className="w-60 h-60" />
          <img src="/public/PhotoImage.webp" className="w-60 h-60" />
          <img src="/public/PhotoImage.webp" className="w-60 h-60" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
