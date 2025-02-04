# Weather Dashboard

A responsive weather dashboard built with React, Tailwind CSS, and the OpenWeatherMap API. The app provides real-time weather updates, forecasts, and dynamic UI changes based on weather conditions.

## Features

- **Search for any city** or use geolocation to get weather data.
- **Real-time weather updates** with 30-second polling.
- **Temperature unit toggle** (Celsius/Fahrenheit).
- **Dynamic backgrounds** based on weather conditions.
- **Local storage support** to retain the last searched city.
- **Error handling** for invalid inputs or API failures.
- **Responsive design** using Tailwind CSS.

## Tech Stack

- **React** (Functional Components & Hooks)
- **Context API** (State Management)
- **OpenWeatherMap API** (Weather Data)
- **Tailwind CSS** (Styling)

## Installation & Setup

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/viswanathr73/Weather-Dashboard.git
   cd weather-dashboard
   ```
2. **Install dependencies**
   ```sh
   npm install  # or yarn install
   ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```sh
     VITE_WEATHER_API_KEY=your_api_key_here
     ```
4. **Start the development server**
   ```sh
   npm run dev  # or yarn dev
   ```

## Usage

- Search for a city using the input field.
- Click on quick-access city buttons for fast lookups.
- Toggle between Celsius and Fahrenheit.
- The app updates automatically every 30 seconds.

## Deployment

To build and deploy the project:
```sh
npm run build  # or yarn build
```

You can deploy the build folder on platforms like Vercel, Netlify, or any static hosting service.

## License

This project is licensed under the MIT License.

## Contact
For any questions or suggestions, feel free to reach out!
