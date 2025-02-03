import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const verticalDetails = [
  {
    id: 1,
    Icon: FaThermometerEmpty,
    title: "Real Feel",
    value: "22°",
  },
  {
    id: 2,
    Icon: BiSolidDropletHalf,
    title: "Humidity",
    value: "346%",
  },
  {
    id: 3,
    Icon: FiWind,
    title: "Wind",
    value: "12 km/h",
  },
];

const horizontalDetails = [
  {
    id: 1,
    Icon: GiSunrise,
    title: "Sunrise",
    value: "05:33 AM",
  },
  {
    id: 2,
    Icon: GiSunset,
    title: "Sunset",
    value: "07:33 PM",
  },
  {
    id: 3,
    Icon: MdKeyboardArrowUp,
    title: "High",
    value: "37°",
  },
  {
    id: 4,
    Icon: MdKeyboardArrowDown,
    title: "Low",
    value: "17°",
  },
];

const TempAndDetails = () => {
  return (
    <div className="">
      <div className="flex item-center justify-center py-6 text-xl text-cyan-300">
        <p className="">Rain</p>
      </div>

      <div className="flex flex-row item-center justify-between py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="weather icon"
          className="w-20 "
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-3 item-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm item-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {`${title}: `} <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row item-center justify-center space-x-10 text-sm py-3">
        {
            horizontalDetails.map(({ id, Icon, title, value }) => (
              <div key={id} className="flex flex-row item-center ">
                <Icon size={30}/>
               <p className="font-light ml-1">
               {`${title}: `}  
               <span className="font-medium ml-1">{value}</span>
               </p>
              </div>
            ))
  
        }
        
      </div>



    </div>
  );
};

export default TempAndDetails;
