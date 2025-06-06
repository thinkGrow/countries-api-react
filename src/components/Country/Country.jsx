import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h3>Name: {country.name.common}</h3>
      <img src={country?.flags?.png} alt="" />
      <p>Independent: {country.independent ? "Free" : "Not Free"} </p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default Country;
