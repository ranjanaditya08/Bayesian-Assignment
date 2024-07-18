export const originOptions = ["JFK", "DEL", "SYD", "BOM", "BNE", "BLR"];

export const destinationOptions = [
  "JFK",
  "DEL",
  "SYD",
  "LHR",
  "CDG",
  "DOH",
  "SIN",
];

export const cabinOptions = ["Economy", "Business", "First"];

export const ORIGIN = {
  options: originOptions,
  label: "Origin",
  bgColor: "bg-[#161616]",
  placeholder: "Choose Origin",
};

export const DESTINATION = {
  options: destinationOptions,
  label: "Destination",
  bgColor: "bg-[#161616]",
  placeholder: "Choose Destination",
};

export const CABIN_SELECTION = {
  options: cabinOptions,
  label: "Cabin Selection",
  bgColor: "bg-[#3a4235]",
  placeholder: "Choose Cabin",
};

export const headers = {
  accept: "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9,hi;q=0.8",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
};

export const requestPayload = {
  origin: "",
  destination: "",
  partnerPrograms: [
    "Air Canada",
    "United Airlines",
    "KLM",
    "Qantas",
    "American Airlines",
    "Etihad Airways",
    "Alaska Airlines",
    "Qatar Airways",
    "LifeMiles",
  ],
  stops: 2,
  departureTimeFrom: "2024-07-09T00:00:00Z",
  departureTimeTo: "2024-10-07T00:00:00Z",
  isOldData: "False",
  limit: 302,
  offset: 0,
  cabinSelection: [],
  date: "2024-07-09T12:00:17.796Z",
};
