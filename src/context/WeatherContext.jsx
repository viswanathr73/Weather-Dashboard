import { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import getFormattedWeatherData from "../services/weatherService";

// Create the Weather context
const WeatherContext = createContext({});

// Custom hook for using weather context
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within WeatherProvider");
  }
  return context;
};

// Weather Provider component
export const WeatherProvider = ({ children }) => {
  // State variables
  const [query, setQuery] = useState(() => {
    const savedCity = localStorage.getItem("lastSearchedCity");
    return { q: savedCity || "kerala" };
  });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch weather data
  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
      if (query.q) {
        localStorage.setItem("lastSearchedCity", query.q);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.response?.status === 404 ? "city_not_found" : "api_error");
    } finally {
      setLoading(false);
    }
  }, [query, units]);

  // Functions to update state
  const updateQuery = (newQuery) => {
    setError(null);
    setQuery(newQuery);
  };

  const updateUnits = (newUnits) => {
    setUnits(newUnits);
  };

  // Value object passed to the provider
  const value = {
    query,
    units,
    weather,
    error,
    loading,
    updateQuery,
    updateUnits,
    fetchWeather,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
// Prop validation for ESLint
WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
