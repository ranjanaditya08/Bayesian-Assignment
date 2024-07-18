import { React, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Dropdwon = ({ props, value, onChange }) => {
  const { options, bgColor, label, placeholder } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (selectedItem) => {
    onChange(selectedItem);
    setOpenDrawer(false);
  };
  return (
    <>
      <div className="relative">
        <div
          className={`flex w-[300px] ${bgColor} p-3 shadow-2xl cursor-pointer rounded-md`}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <div className="w-2/3">
            <p className="text-slate-500 font-semibold text-xs tracking-wider">
              {label}
            </p>
            <div className="text-slate-400">{value ? value : placeholder}</div>
          </div>
          <div className="w-1/3 flex items-center justify-end px-1">
            {openDrawer == true ? (
              <FaChevronUp color="white" />
            ) : (
              <FaChevronDown color="white" />
            )}
          </div>
        </div>
        {openDrawer && (
          <div className="absolute z-10 top-[66px] left-0 bg-[#111111] p-3 shadow-2xl w-[300px] text-slate-400 cursor-pointer">
            {options.map((item, index) => (
              <div key={index} onClick={() => handleChange(item)} className="hover:bg-[#1c1c1c] px-1">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdwon;
