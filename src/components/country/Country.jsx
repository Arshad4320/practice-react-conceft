import { useState } from "react";

const Country = ({ country, handleCountries, handleAddFlag }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleCountries(country);
  };
  return (
    <div className={`border p-3 ${visited && "bg-red-100"}`}>
      <div>Name : {country.name.common}</div>
      <img className="w-full" src={country.flags.png} alt="" />
      <button
        onClick={handleVisited}
        className={`text-center  px-4 text-white my-2 py-1 rounded-md ${
          visited ? "bg-amber-600" : "bg-amber-300"
        }`}
      >
        {visited ? "visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleAddFlag(country.flags.png);
        }}
        className=" ml-2 text-center  px-4 text-white my-2 py-1 rounded-md 
          bg-amber-300"
      >
        Add flag
      </button>
    </div>
  );
};

export default Country;
