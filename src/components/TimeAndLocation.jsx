const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6 text-white">
        <p className="text-xl font-light">{formattedLocalTime}</p>
      </div>
      <div className="flex items-center justify-center my-3 text-white">
        <p className="text-3xl font-medium">{`${name},${country}`}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation

