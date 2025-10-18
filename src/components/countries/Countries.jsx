import React, { use, useState } from "react";
import Country from "../country/Country";

const Countries = ({ promiseData }) => {
  const data = use(promiseData);
  const [countries, setVisitedCountries] = useState([]);
  const [flag, setFlags] = useState([]);

  const handleCountries = (country) => {
    setVisitedCountries([...countries, country]);
  };
  const handleAddFlag = (flags) => {
    setFlags([...flag, flags]);
  };
  return (
    <>
      <h2 className="text-2xl text-center text-blue-400 my-3">
        Visited Country : {countries.length}
      </h2>
      <div>
        <p>visited flag country</p>
        <div className="flex gap-2">
          {flag.map((i) => (
            <div>
              <img className="w-5 h-5 " src={i} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {data?.map((country) => (
          <Country
            country={country}
            handleCountries={handleCountries}
            handleAddFlag={handleAddFlag}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
