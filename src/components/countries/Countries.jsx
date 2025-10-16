import React, { use } from "react";
import Country from "../country/Country";

const Countries = ({ promiseData }) => {
  const data = use(promiseData);

  return (
    <div>
      {data?.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
};

export default Countries;
