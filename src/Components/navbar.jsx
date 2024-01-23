import React from "react";
import { IoNewspaperSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const open = () => {
    setOpened(true);
  };
  const close = () => {
    setOpened(false);
  };

  return (
    <div className=" flex justify-between w-full h-20 bg-zinc-950 items-center">
      <div className=" flex p-5 gap-2">
        <IoNewspaperSharp color="white" size={30} />
        <p className=" text-white text-2xl font-Oswald">NewsGram</p>
      </div>
      <div className="p-5">
        {!opened ? (
          <RxHamburgerMenu
            color="white"
            size={30}
            onClick={open}
            className=" hover:cursor-pointer"
          />
        ) : (
          <MdOutlineClose
            color="white"
            size={30}
            onClick={close}
            className="hover:cursor:pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
