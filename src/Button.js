import React from "react";

const Button = ({ onClick }) => {
  return (
    <div className="w-[300px] flex items-start">
      <button
        className="px-3 bg-[#38b8a6] rounded-md text-white hover:bg-[#2f8e82]"
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
};

export default Button;
