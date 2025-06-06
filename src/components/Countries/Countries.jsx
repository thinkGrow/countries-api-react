import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
    // console.log("flag is added", flag);
  };

  console.log(visitedCountries, setVisitedCountries);

  const handleVisitedCountries = (country) => {
    console.log("country visited clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h1>Traveling countries: {countries.length}</h1>

      <h3>Travelled so far: {visitedCountries.length}</h3>

      <h1>Visited Flag</h1>
      <div>
        <div className="visited-flags-container">
          {visitedFlags.map((flag, index) => (
            <img key={index} src={flag}></img>
          ))}
        </div>
      </div>

      <ol style={{ textAlign: "left" }}>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
