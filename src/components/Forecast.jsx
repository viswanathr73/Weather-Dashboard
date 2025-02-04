const Forecast = ({ title, data }) => {
  return (
    <div className="bg-white/20 rounded-lg p-6 mt-6">
      <div className="item-center justify-start mt-6 ">
        <p className="font-medium uppercase text-white mb-2">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-wrap items-center justify-between">
        {data.map((d, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-3 m-1">
            <p className="font-light text-sm text-white">{d.title}</p>
            <img src={d.icon || "/placeholder.svg"} alt="weather icon" className="w-12 my-1 " />
            <p className="font-medium text-white">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast

