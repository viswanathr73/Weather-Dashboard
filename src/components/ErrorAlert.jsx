import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const ErrorAlert = ({ error }) => {
    if (!error) return null
  
    return (
      <div className="mb-6 p-4 rounded-md bg-red-500/20 border border-red-500/50 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <ExclamationCircleIcon className="h-5 w-5 text-red-400" />
          <p className="text-white text-sm">
            {error === 'city_not_found' 
              ? 'City not found. Please check the spelling and try again.'
              : 'Unable to fetch weather data. Please try again later.'}
          </p>
        </div>
      </div>
    )
  }
  
  export default ErrorAlert