import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { GiSunrise, GiSunset } from "react-icons/gi"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

const TempAndDetails = ({
  weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}° `,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}% `,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "Km/h" : "m/s"} `,
    },
  ]

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}° `,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}° `,
    },
  ]

  return (
    <div className="bg-white/20 rounded-lg p-6 mt-6">
      <div className="flex items-center justify-center py-6 text-xl text-white">
        <p className="">{details}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-3">
        <img src={icon || "/placeholder.svg"} alt="weather icon" className="w-20" />
        <p className="text-7xl font-bold text-white">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-3 items-start text-white">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex font-light text-sm items-center justify-center">
              <Icon size={18} className="mr-1" />
              {`${title}: `} <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white mt-6">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-col items-center justify-center bg-white/20 rounded-lg p-2">
            <Icon size={24} className="mb-1" />
            <p className="font-light text-sm">{title}</p>
            <p className="font-medium">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TempAndDetails

