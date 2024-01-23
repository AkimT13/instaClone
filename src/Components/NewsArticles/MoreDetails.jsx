import React from "react";

const MoreDetails = ({ description }) => {
  return (
    <div className="flex flex-row justify-center border-t-[1px] border-gray-500 ">
      <p className="text-xs font-NunitoSans p-2 text-white">{description}</p>
    </div>
  );
};

export default MoreDetails;
