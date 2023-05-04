import React, { ChangeEvent, useState } from 'react'
import { City } from '../types';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from '../views/Home';
import { Box, CircularProgress, TextField, styled } from '@mui/material';

const Txt = styled("div")({
    fontSize: 25,
    color: '#7F7F7F',
    textAlign: 'center',
    display: 'block',
    margin: 5,
    width: '100%',
    fontFamily: 'Quicksand sans-serif',
});
const Root = styled("div")({
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
});
const Field = styled("div")({
    marginTop: 10,
    backgroundColor: '#e7e7e7',
    color: 'black',
    borderRadius: 8,
    padding: 8,
    fontSize: 8,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '20%',

});
const CityText = styled("div")({
    padding: 10,
    margin: 5,
    fontSize: 18,
    color: "e7e7e7",
    textDecoration: 'inherit',
    fontFamily: 'Quicksand sans-serif',
    textAlign: "center"
});

const InputField: React.FC = () => {
    const [city, setCity] = useState<City[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [textLon, setTextLon] = useState<string>("");
    const [textLat, setTextLat] = useState<string>("");
    const [textCity, setTextCity] = useState<string>("");
    const [textCountry, setTextCountry] = useState<string>("");
    const key = "enter keyword"

    const getUrl = (value: string) => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${key}`)
            .then((res) => res.json())
            .then((data) => setCity(data))
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setSearchText(value)
        if (value === '') return
        getUrl(value)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>
                        <Txt >
                            Location
                        </Txt>
                        <Root>
                            <Field>
                                <TextField placeholder="Search" sx={{ width: "100%" }}
                                    id="standard-multiline-static"
                                    multiline
                                    rows={1}
                                    onChange={onInputChange}
                                    value={searchText} InputProps={{ disableUnderline: true }}
                                />
                            </Field>
                        </Root>
                        {city && city.map((cty, i) => {
                            return <div onClick={() => {
                                setTextLon(cty.lat)
                                setTextLat(cty.lat)
                                setTextCity(cty.name)
                                setTextCountry(cty.country)
                            }} key={i} >
                                <Link style={{
                                    textDecoration: 'none', color: 'black',
                                    fontFamily: 'Quicksand sans-serif'
                                }} to={`/Weather/${cty.name}/${cty.lat}/${cty.lon}`} >
                                    <CityText>{cty.name} , {cty.country}</CityText>
                                </Link>
                            </div>
                        })}
                    </div>
                }
                />

                {
                    textCity !== null ?
                        <Route path="Weather/:city/:Lat/:Lon" element={<Home lat={textLat} lon={textLon} cityName={textCity} country={textCountry} />} ></Route>
                        : <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                }
            </Routes>
        </BrowserRouter>
    )
}
export default InputField