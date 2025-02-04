import { useEffect, useState } from "react"
import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"

const App = () => {
  const [query, setQuery] = useState({ q: "kerala" })
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    try {
      const data = await getFormattedWeatherData({ ...query, units })
      setWeather(data)
    } catch (error) {
      console.error("Error fetching weather data:", error)
    }
  }

  useEffect(() => {
    getWeather()
  }, [query, units, getWeather]) // Added getWeather to dependencies

  const getBackgroundImage = () => {
    if (!weather) return "/assets/Clear.jpg" // Default background

    const condition = weather.details.toLowerCase()

    if (condition.includes("clouds")) return "/assets/Cloudy.jpg"
    if (condition.includes("mist") || condition.includes("fog")) return "/assets/fog.png"
    if (condition.includes("rain") || condition.includes("drizzle")) return "/assets/Rainy.jpg"
    if (condition.includes("snow")) return "/assets/snow.jpg"
    if (condition.includes("storm") || condition.includes("thunder")) return "/assets/Stormy.jpg"
    if (condition.includes("clear")) return "/assets/Sunny.jpg"

    return "/assets/clear.jpg" // Fallback
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />

          {weather && (
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

