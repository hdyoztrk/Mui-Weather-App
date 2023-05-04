import React, { useState } from 'react'
import placeholder from '../../src/img/placeholder.svg'
import { styled } from '@mui/material';
import { useNavigate } from 'react-router';

type weatherProps = {
    cty: string,
    country: string
}

const CityLayout2 = styled("div")({
    left: 4,
    top: 0,
    background: '#2579f7',
    opacity: 0.8,
    padding: 9,
    borderRadius: '0px  18px 0px 18px',
    fontFamily: 'Quicksand sans-serif',
    fontSize: 10,
    textDecoration: 'none',
    fontWeight: "bold"
});

const CityLayout = styled("div")({
    width: '32%',
    position: 'relative',
    textAlign: 'center',
    color: 'black',
    opacity: 0.8,
    padding: 5,
});
const ImgIcn = styled("img")({
    width: '15%',
    height: 10,
    alignItems: 'center',
    marginLeft: 20,
});

export const WeatherCity = ({ cty, country }: weatherProps) => {
    const history = useNavigate();
    const [backImage, setBackImage] = useState(placeholder);
    return (
        <CityLayout>
            <CityLayout2 onClick={() => history("/")} sx={{ cursor: "pointer" }}>
                {cty} {"    "} {country}
                <ImgIcn src={backImage} />
            </CityLayout2>
        </CityLayout>
    )
}
