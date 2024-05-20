export interface WeatherDatas{
  coord:{
    longitude: number,
    latitude: number
  },

  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ];

  base: string;
  main: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
  },
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  },
  clouds:{
    all: number;
  },
  dt: number,
  sys:{
    type: number,
    id: number,
    contry: string,
    sunrise: number,
    sunset: number
  },

  timezone: number,
  id: number,
  name: string,
  cod: number;
}
