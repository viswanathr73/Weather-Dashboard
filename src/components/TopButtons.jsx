const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "New York",
    },
    {
      id: 2,
      name: "London",
    },
    {
      id: 3,
      name: "Chicago",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "Tokyo",
    },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center my-6 gap-3">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-white/30 px-3 py-2 rounded-md transition ease-in bg-white/20 text-white"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  )
}

export default TopButtons

