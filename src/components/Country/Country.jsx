import React from "react";
import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  //   console.log(handleVisitedCountries);

  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name: {country.name.common}</h3>
      <img src={country?.flags?.png} alt="" />
      <p>Independent: {country.independent ? "Free" : "Not Free"} </p>
      <p>Population: {country.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
