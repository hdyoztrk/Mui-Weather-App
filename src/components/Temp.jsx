import { styled } from '@mui/material';
import React, { useState } from 'react'
import down from '../../src/img/down-arrow.svg'
import up from '../../src/img/up-arrow.svg'

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
const SmallDownn = styled("div")({
    width: ' 50%',
    textAlign: 'center',
    margin: 'auto',
    fontSize: 15,
});
const ImgIcn = styled("img")({
    width: '15%',
    height: 10,
    alignItems: 'center',
});
const SmallUpp = styled("div")({
    marginTop: 11,
    textAlign: 'center',
    margin: 'auto',
    width: ' 50%',
    fontSize: 15,
});

type temp = {
    min: number;
    max: number;
}

const Temp = ({ min, max }: temp) => {
    const [backImageUp, setBackImageUp] = useState(up);
    const [backImageDown, setBackImageDown] = useState(down);
    return (
        <Root  >
            <br />
            <SmallUpp> <span >{max}</span>&deg;c
                <ImgIcn src={backImageUp} />
            </SmallUpp>
            <br />
            <SmallDownn ><span>{min}</span>&deg;c
                <ImgIcn src={backImageDown} />
            </SmallDownn>
        </Root>
    )
}

export default Temp