import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";

const promiseData = fetch("/bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>data is loading....</h3>}>
        <Bottles promiseData={promiseData} />
      </Suspense>
    </>
  );
}

export default App;
