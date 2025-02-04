import { useState } from "react"

import { BiSearch, BiCurrentLocation } from "react-icons/bi"

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("")

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city })
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setQuery({ lat: latitude, lon: longitude })
      })
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-center my-6 space-y-4 md:space-y-0">
      <div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search by city.."
          className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase rounded-l-md bg-white/20 text-white placeholder-gray-300"
        />

        <BiSearch
          size={40}
          className="cursor-pointer transition ease-out hover:scale-125 bg-white/20 p-2 rounded-r-md"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={40}
          className="cursor-pointer transition ease-out hover:scale-125 bg-white/20 p-2 rounded-r-md"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-full md:w-1/4 items-center justify-center space-x-2">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 bg-white/20 p-2 rounded-md"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1"></p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 bg-white/20 p-2 rounded-md"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  )
}

export default Inputs
