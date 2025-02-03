import React from "react";

const TopButtons = () => {
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
  ];

  return (
    <div className="flex item-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
