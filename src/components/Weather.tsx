import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Current } from '../types';
import { WeatherDate } from './WeatherDate';
import { WeatherCity } from './WeatherCity';
import { styled } from '@mui/material';
import Sky from './Sky';
import Deg from './Deg';
import Temp from './Temp';
import Humudity from './Humudity';
import Pressure from './Pressure';
import Wind from './Wind';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import Daytime from './Daytime';
import DayTimeImage from '../../src/img/daytime.png'
import NightTimeImage from '../../src/img/night.png'

type ctyProps = {
  lat: string;
  lon: string;
  cityName: string;
  country: string;
  icon: Dispatch<SetStateAction<string>>
}

const DateCity = styled("div")({
  zIndex: 999,
  width: "100%",
  borderRadius: '18px 18px 0px 0px',
  marginTop: -14,
  height: 40,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Root = styled("div")({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '35%',
  background: "white",
  borderRadius: '18px 18px 0px 0px',
  alignItems: "center",
});

const WeatherInfo = styled("div")({
  display: 'flex',
  flexDirection: 'column',
});

const WeatherRow = styled("div")({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '5px 0px',
});

const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

export const Weather: React.FC<ctyProps> = ({ lat, lon, cityName, country, icon }: ctyProps) => {

  const nowTime = WeatherDate().props.children[1]

  const weatherCity = {
    url: 'https://api.openweathermap.org/data/2.5/',
    key: "enter keyword"
  }
  const [information, setInformation] = useState<Current>();

  const getUrl = async () => {
    fetch(`${weatherCity.url}weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherCity.key}`)
      .then((res) => res.json())
      .then((data) => setInformation(data))
  }

  useEffect(() => {
    getUrl();
  }, [])

  if (information && getSunTime(information.sys.sunset) >= (nowTime) && (information && getSunTime(information.sys.sunrise) <= (nowTime))) {
    icon(DayTimeImage)
  } else {
    icon(NightTimeImage)
  }

  return (
    <Root >
      <DateCity>
        <WeatherDate />
        <WeatherCity cty={cityName} country={country} />
      </DateCity>
      <WeatherInfo >
        <WeatherRow  >
          <Sky skyValue={information && information.weather[0].description} icon={information && information.weather[0].icon} />
          {information && <Deg sky={Math.round(information.main.temp)} />}
          {information && <Temp min={Math.floor(information.main.temp_min)} max={Math.ceil(information.main.temp_max)} />}
        </WeatherRow>
        <WeatherRow >
          {information && <Humudity main={Math.round(information.main.humidity)} />}
          {information && <Pressure main={information.main.pressure} />}
          {information && <Wind main={Math.round(information.wind.speed)} />}
        </WeatherRow>
        <WeatherRow >
          {information && <Sunrise main={getSunTime(information.sys.sunrise)} />}
          {information && <Sunset main={getSunTime(information.sys.sunset)} />}
          {information && <Daytime sunrise={(information.sys.sunrise * 1000)} sunset={(information.sys.sunset * 1000)} />}
        </WeatherRow>
      </WeatherInfo>
    </Root>
  )
}
