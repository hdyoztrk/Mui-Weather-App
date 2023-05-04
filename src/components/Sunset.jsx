import React, { useState } from 'react'
import DayTimeImage from '../../src/img/96.png'
import { styled } from '@mui/material';

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
    width: '34%',
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
    main: string;
}

const Sunset = ({ main }: props) => {
    const [backImage, setBackImage] = useState(DayTimeImage);
    return (
        <Root>
            <ImgIcn src={backImage} />
            <Fnt1><b>{main} PM</b></Fnt1>
            <Fnt2>Sunset</Fnt2>
        </Root>
    )
}

export default Sunset
