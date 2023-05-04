import React, { useState } from 'react'
import { Weather } from '../components/Weather';
import { Picture } from '../components/Picture';
import { styled } from '@mui/material';

type ctyProps = {
    lat: string;
    lon: string;
    cityName: string;
    country: string;
}

const Background = styled("div")({
    background: '#f2f2f2',
    margin: 0,
    padding: 0,
    width: '100%',
    height: "100vh",
});
const Img = styled("div")({
    zIndex: -999,
});
const Panel = styled("div")({
    zIndex: 999,
});

const Home: React.FC<ctyProps> = ({ lat, lon, cityName, country }: ctyProps) => {

    const [day, setDay] = useState("")

    return (
        <Background>
            <Img>
                <Picture icon={day} />
            </Img>
            <Panel >
                <Weather lat={lat} lon={lon} cityName={cityName} country={country} icon={setDay} />
            </Panel>
        </Background>
    )
}

export default Home