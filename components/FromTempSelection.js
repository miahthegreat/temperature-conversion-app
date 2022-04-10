import { convertCelsius, convertFahrenheit, convertKelvin } from "../helpers";

const tempMeasurements = [
  { id: "Celsius", title: "Celsius" },
  { id: "Fahrenheit", title: "Fahrenheit" },
  { id: "Kelvin", title: "Kelvin" },
];

function FromTempSelection({ set, temp, setConvertedTemps }) {
  const handleChange = (e) => {
    set(e.target.id);
    if (e.target.id === "Kelvin")
      setConvertedTemps(convertKelvin(parseInt(temp)));
    if (e.target.id === "Celsius")
      setConvertedTemps(convertCelsius(parseInt(temp)));
    if (e.target.id === "Fahrenheit")
      setConvertedTemps(convertFahrenheit(parseInt(temp)));
  };

  return (
    <div>
      <label className="text-base font-medium text-gray-900">
        Choose measurement
      </label>
      <p className="text-sm leading-5 text-gray-500">
        What measurement would you like to convert from?
      </p>
      <fieldset className="mt-4">
        <legend className="sr-only">Temperature measurement</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {tempMeasurements.map((tempMeasurement) => (
            <div key={tempMeasurement.id} className="flex items-center">
              <input
                id={tempMeasurement.id}
                name="temp-measurement"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                onChange={handleChange}
              />
              <label
                htmlFor={tempMeasurement.id}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {tempMeasurement.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default FromTempSelection;
