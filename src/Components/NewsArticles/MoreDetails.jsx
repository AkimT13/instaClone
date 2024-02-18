import React from "react";

const MoreDetails = ({ description, html }) => {
  return (
    <div className="flex flex-col justify-center border-t-[1px] border-gray-500 ">
      <p className="text-xs font-NunitoSans p-2 text-white">{description}</p>
      <p className="text-xs font-NunitoSans p-2 text-white">{html}</p>
    </div>
  );
};

export default MoreDetails;
