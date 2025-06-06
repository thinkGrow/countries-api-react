import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState([]);

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

      <ol style={{ textAlign: "left" }}>
        {visitedCountries.map((country) => (
          <li key={country.ccn3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
