import { styled } from '@mui/material';
import React from 'react'

const Root = styled("div")({
    height: 90,
    width: '31%',
    borderRadius: '8px',
    margin: 0,
});

const Sky = styled("span")({
    fontSize: 48,
    margin: 0,
    marginTop: 10,
    textAlign: 'center',
    color: '#58555A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const Fnt = styled("sup")({
    textAlign: 'center',
    fontSize: 30,
});

type props = {
    sky: number;
}

const Deg = ({ sky }: props) => {
    return (
        <Root>
            <div> <Sky >{sky}<Fnt>
                &deg;c</Fnt></Sky>
            </div>
        </Root>
    )
}

export default Deg