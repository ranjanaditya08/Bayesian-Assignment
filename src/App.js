import Dropdwon from "./components/Dropdown";
import Button from "./components/Button";
import { ORIGIN, DESTINATION, CABIN_SELECTION, headers } from "./constants";
import { useState } from "react";
import { getRequestPayload } from "./utils";
import Card from "./components/Card";

const App = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cabin, setCabin] = useState("");
  const [result, setResult] = useState([]);

  const [searchPayload, setSearchPayload] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const payload = getRequestPayload(origin, destination, cabin);
    try {
      const res = await fetch("https://cardgpt.in/apitest", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: headers,
      });
      const data = await res.json();
      setResult(data?.data);
      setSearchPayload(payload);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOriginChange = (selectedOrigin) => {
    setOrigin(selectedOrigin);
  };

  const handleDestinationChange = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  const handleCabinChange = (selectedCabin) => {
    setCabin(selectedCabin);
  };

  console.log(result);
  return (
    <div className="h-screen">
      <main className="w-full flex  flex-col justify-center items-center">
        <h3 className="text-slate-400 font-semibold tracking-wider mb-4">
          Choose Origin & Destination Airports:
        </h3>
        <div className="mb-10">
          <Dropdwon
            props={ORIGIN}
            value={origin}
            onChange={handleOriginChange}
          />
        </div>
        <div className="mb-10">
          <Dropdwon
            props={DESTINATION}
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <div className="mb-10">
          <Dropdwon
            props={CABIN_SELECTION}
            value={cabin}
            onChange={handleCabinChange}
          />
        </div>

        <Button onClick={handleSearch} />
        {isLoading && (
          <div className="font-bold text-white tracking-wider">
            Searching...
          </div>
        )}
        {!isLoading && result && (
          <div className="flex flex-wrap justify-center gap-4">
            {result.map((item) => (
              <Card item={item} searchPayload={searchPayload} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
