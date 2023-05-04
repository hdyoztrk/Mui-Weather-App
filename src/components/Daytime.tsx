import { styled } from '@mui/material';
import React, { useState } from 'react'
import DayTimeImage from '../../src/img/156.png'
import moment from 'moment-timezone';

const Root = styled("div")({
    height: 90,
    width: '31%',
    borderRadius: '8px',
    margin: 0,
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Quicksand sans-serif',
});
const ImgIcn = styled("img")({
    width: '36%',
    alignItems: 'center',
});
const Fnt1 = styled("div")({
    textAlign: 'center',
    margin: 'auto',
    color: '#58555A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
const Fnt2 = styled("div")({
    fontSize: 11,
    textAlign: 'center',
    margin: 'auto',
    color: '#7F7F7F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

type props = {
    sunrise: number;
    sunset: number;
}

const Daytime = ({ sunrise, sunset }: props) => {
    const [backImage, setBackImage] = useState(DayTimeImage);
    const sunr = (sunrise)
    const suns = (sunset)
    const extraction = (suns - sunr)
    return (
        <Root >
            <ImgIcn src={backImage} />
            <Fnt1><b><span>{moment(extraction).format('HH')}h</span></b></Fnt1>
            <Fnt2>Daytime</Fnt2>
        </Root>
    )
}

export default Daytime
