import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { getFormattedDate } from "../utils";

const Card = ({ item, searchPayload }) => {
  const {
    min_business_miles,
    min_business_tax,
    min_economy_miles,
    min_economy_tax,
    min_first_miles,
    min_first_tax,
    partner_program,
  } = item;

  const { origin, destination, departureTimeFrom, departureTimeTo } =
    searchPayload;

  return (
    <div className="bg-[#356841] text-white rounded-lg py-2 w-48 h-80 mt-10">
      <div className="">
        <div className="flex justify-center mb-2">
          <GiCommercialAirplane />
        </div>
        <div className="text-center text-2xl mb-2 text-slate-300">
          {partner_program}
        </div>
        <div className="text-center text-slate-300">{`${origin}->${destination}`}</div>
        <div className="text-center font-thin text-xs text-slate-300 mb-2">
          {`${getFormattedDate(departureTimeFrom)} - ${getFormattedDate(
            departureTimeTo
          )}`}
        </div>
        <div className="text-center font-semibold text-3xl">
          {min_business_miles ? min_business_miles : "N/A"}
          <span className="text-xs text-slate-300">
            {min_business_tax ? ` +$${min_business_tax}` : ""}
          </span>
        </div>
        <div className="text-center font-thin text-xs text-slate-300 mb-2">
          Min Bussiness Miles
        </div>
        <div className="text-center text-3xl font-semibold">
          {min_economy_miles ? min_economy_miles : "N/A"}
          <span className="text-xs text-slate-300">
            {min_economy_tax ? ` +$${min_economy_tax}` : ""}
          </span>
        </div>
        <div className="text-center font-thin text-xs text-slate-300 mb-2">
          Min Economy Miles
        </div>
        <div className="text-center font-semibold text-3xl">
          {min_first_miles ? min_first_miles : "N/A"}{" "}
          <span className="text-xs text-slate-300">
            {min_first_tax ? ` +$${min_first_tax}` : ""}
          </span>
        </div>
        <div className="text-center font-thin text-xs text-slate-300 mb-2">
          Min First Miles
        </div>
      </div>
    </div>
  );
};

export default Card;
