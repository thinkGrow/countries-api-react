import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <div>
      <h1>traveling countries: {countries.length}</h1>

      {countries.map((country) => (
        <Country key={country.ccn3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
