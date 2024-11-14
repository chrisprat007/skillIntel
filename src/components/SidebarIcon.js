import React from "react";

export default function SidebarIcon({ icon, value, index, setIndex }) {

  const handleClick = () => {
    setIndex(value);
  };

  return (
    <div className="flex items-center justify-between w-[76px] ml-4">
      <div
        onClick={handleClick}
        className="bg-transparent text-gray-800 p-2 m-2 cursor-pointer rounded-md flex"
      >
        {icon}
      </div>
      {index === value && (
        <div
          className="indicator bg-blue-500"
        />
      )}
    </div>
  );
}
