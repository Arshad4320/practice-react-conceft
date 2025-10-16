import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

function App() {
  const promiseData = fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags"
  ).then((res) => res.json());
  return (
    <>
      <Suspense fallback={<h3>data is loading....</h3>}>
        <h2>Showing All Countries</h2>
        <Countries promiseData={promiseData} />
      </Suspense>
    </>
  );
}

export default App;
