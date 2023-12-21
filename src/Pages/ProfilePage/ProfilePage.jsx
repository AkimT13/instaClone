import React from "react";
import Sidebar from "../../Components/Sidebar";

const ProfilePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col items-center w-full">
        <div className=" flex mt-20 "></div>
        <div>Profiletabs</div>
        <div>profileposts</div>
      </div>
    </div>
  );
};

export default ProfilePage;
