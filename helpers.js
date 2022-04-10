export const convertKelvin = (temp) => {
  let c;
  let f;
  let conversions = [];

  f = {
    measurement: "Fahrenheit",
    temp: 1.8 * (temp - 273) + 32,
  };
  c = {
    measurement: "Celsius",
    temp: temp - 273,
  };

  conversions = [c, f];

  return conversions;
};

export const convertCelsius = (temp) => {
  let k;
  let f;
  let conversions = [];

  k = {
    measurement: "Kelvin",
    temp: temp + 273,
  };
  f = {
    measurement: "Fahrenheit",
    temp: 1.8 * temp + 32,
  };

  conversions = [f, k];

  return conversions;
};

export const convertFahrenheit = (temp) => {
  let c;
  let k;
  let conversions = [];

  k = {
    measurement: "Kelvin",
    temp: (5 / 9) * (temp - 32) + 273,
  };
  c = {
    measurement: "Celsius",
    temp: (5 / 9) * (temp - 32),
  };

  conversions = [c, k];

  return conversions;
};
