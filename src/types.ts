export interface weatherApi {
  current: Current;
}

export interface WeatherSky {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Current {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
    type: number;
    id: number;
    message: number;
  };
  coord: {
    lon: number;
    lat: number;
  }
  name: string;
  weather: WeatherSky[];

}

export interface City {
  name: string;
  country: string;
  lat: string;
  lon: string;
}
