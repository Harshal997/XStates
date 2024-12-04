import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCities, getCountries, getStates } from "../api/api";

export const Location = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const fetchCountries = async () => {
    const response = await getCountries();
    setCountries(response);
  };

  const fetchStates = async (country) => {
    const response = await getStates(country);
    setStates(response);
  };

  const fetchCities = async (country, state) => {
    const response = await getCities(country, state);
    setCities(response);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    fetchStates(country)
  },[country])

  useEffect(() => {
    fetchCities(country, state)
  },[country, state])

  return (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: 30, alignItems: 'center'}}>
        <div style={{display: 'flex', columnGap: 24, padding: 30}}>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="" disabled selected>
          Select Country
        </option>
        {countries &&
          countries.length &&
          countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
      </select>
      <select onChange={(e) => setState(e.target.value)}>
        <option value="" disabled selected>
          Select State
        </option>
        {states &&
          states.length &&
          states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
      </select>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="" disabled selected>
          Select City
        </option>
        {cities &&
          cities.length &&
          cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
      </select>
    </div>
    {city && <p>You Selected <strong>{city}</strong>, {state}, {country}</p>}
    </div>
  );
};
