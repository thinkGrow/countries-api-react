import "./App.css";
import Countries from "./components/Countries/Countries";
import { Suspense } from "react";

const countriesPromise = fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,cca3,currencies,languages,timezones"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>React on the Go</h1>

      <Suspense fallback={<h1>...</h1>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
