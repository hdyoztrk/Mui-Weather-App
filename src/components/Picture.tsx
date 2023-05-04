import { styled } from '@mui/material';
import React from 'react'

const Root = styled("div")({
    height: 295,
    margin: 0,
    padding: 0,
});

const ImgStyle = styled("img")({
    zIndex: -999,
    backgroundSize: "cover",
    height: 279,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '35%',
    borderRadius: 10,
});

type ctyProps = {
    icon: string;
}

export const Picture: React.FC<ctyProps> = ({ icon }: ctyProps) => {
    return (
        <Root>
            <ImgStyle src={icon} />
        </Root>
    )
}
