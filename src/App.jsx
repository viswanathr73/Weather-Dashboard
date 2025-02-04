import { useEffect, useState, useCallback } from "react"
import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import ErrorAlert from "./components/ErrorAlert"
import getFormattedWeatherData from "./services/weatherService"

const POLLING_INTERVAL = 30000 // 30 seconds
const STORAGE_KEY = 'lastSearchedCity'

const App = () => {
  const [query, setQuery] = useState(() => {
    const savedCity = localStorage.getItem(STORAGE_KEY)
    return { q: savedCity || "kerala" }
  })
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  const getWeather = useCallback(async () => {
    try {
      setError(null)
      const data = await getFormattedWeatherData({ ...query, units })
      setWeather(data);
      setLoading(false);  // Hide loading after success

      // Save successful city search to localStorage
      if (query.q) {
        localStorage.setItem(STORAGE_KEY, query.q)
      }
    } catch (error) {
      console.error("Error fetching weather data:", error)
      setError(error.response?.status === 404 ? 'city_not_found' : 'api_error');
      setLoading(false); // Hide loading on error
    }
  }, [query, units])

  // Initial fetch and polling setup
  useEffect(() => {
    getWeather();
    
    // Set up polling interval
    const pollInterval = setInterval(getWeather, POLLING_INTERVAL)
    
    // Cleanup interval on unmount or when dependencies change
    return () => clearInterval(pollInterval)
  }, [getWeather])

  const handleSetQuery = (newQuery) => {
    setError(null) // Clear any existing errors
    setQuery(newQuery)
  }

  const getBackgroundImage = () => {
    if (!weather) return "/assets/Clear.jpg"

    const condition = weather.details.toLowerCase()

    if (condition.includes("clouds")) return "/assets/Cloudy.jpg"
    if (condition.includes("mist") || condition.includes("fog")) return "/assets/fog.png"
    if (condition.includes("rain") || condition.includes("drizzle")) return "/assets/Rainy.jpg"
    if (condition.includes("snow")) return "/assets/snow.jpg"
    if (condition.includes("storm") || condition.includes("thunder")) return "/assets/Stormy.jpg"
    if (condition.includes("clear")) return "/assets/Sunny.jpg"

    return "/assets/clear.jpg"
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div
        className="relative w-full max-w-screen-lg rounded-lg overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 p-8 ">
          <TopButtons setQuery={handleSetQuery} />
          <Inputs setQuery={handleSetQuery} setUnits={setUnits} />
          {/* Show error message if an error occurs */}
          {error && <ErrorAlert error={error} />}
 {/* Show loading message before displaying weather */}
 {!weather && !error && (
            <div className="flex justify-center items-center h-32">
              <p className="text-white text-lg animate-pulse">Fetching weather data...</p>
            </div>
          )}

          {/* Display weather details when available */}

          {weather && !error && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <Forecast title="3 Hour Step Forecast" data={weather.hourly} />
              <Forecast title="Daily Forecast" data={weather.daily} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App