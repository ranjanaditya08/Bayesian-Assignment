import { requestPayload } from "./constants";

export const getRequestPayload = (origin, destination, cabin) => {
  return {
    ...requestPayload,
    origin,
    destination,
    cabinSelection: [...requestPayload.cabinSelection, cabin],
  };
};

export const getFormattedDate = (date) => {
  const dateValue = new Date(date);
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth() + 1;
  const day = dateValue.getDay() + 1;

  const dateString = `${year}-${month}-${day}`;
  return dateString;
};
