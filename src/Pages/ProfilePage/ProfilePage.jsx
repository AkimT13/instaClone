import React from "react";
import Sidebar from "../../Components/Sidebar";

const ProfilePage = () => {
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
        <div>Profiletabs</div>
        <div>profileposts</div>
      </div>
    </div>
  );
};

export default ProfilePage;
