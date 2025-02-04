import { useEffect } from "react"
import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import ErrorAlert from "./components/ErrorAlert"
import { useWeather } from "./context/WeatherContext"

const POLLING_INTERVAL = 30000 // 30 seconds

const App = () => {
  const { 
    weather, 
    error, 
    loading,
    fetchWeather 
  } = useWeather()

  // Initial fetch and polling setup
  useEffect(() => {
    fetchWeather()
    
    const pollInterval = setInterval(fetchWeather, POLLING_INTERVAL)
    return () => clearInterval(pollInterval)
  }, [fetchWeather])

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

        <div className="relative z-10 p-8">
          <TopButtons />
          <Inputs />
          
          {error && <ErrorAlert error={error} />}

          {loading && !weather && (
            <div className="flex justify-center items-center h-32">
              <p className="text-white text-lg animate-pulse">Fetching weather data...</p>
            </div>
          )}

          {weather && !error && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} />
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