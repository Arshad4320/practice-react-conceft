import React, { use } from "react";
import Country from "../country/Country";

const Countries = ({ promiseData }) => {
  const data = use(promiseData);

  return (
    <div className="grid grid-cols-4 gap-10">
      {data?.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
};

export default Countries;
