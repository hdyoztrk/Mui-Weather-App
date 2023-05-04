import React from 'react'
import { styled } from "@mui/material";

const Txt = styled("span")({
    fontSize: 18,
    margin: "auto",
    textAlign: "center",
    color: "#58555A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
});

const Root = styled("div")({
    height: 90,
    width: "31%",
    borderRadius: "8px",
    margin: 0,
    fontSize: 12,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Quicksand sans-serif",
});

const ImgIcn = styled("img")({
    width: "40%",
    alignItems: "center",
});

type props = {
    skyValue: string | undefined;
    icon: string | undefined;
};

const Sky = ({ skyValue, icon }: props) => {
    return (
        <Root>
            <ImgIcn
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            />
            <Txt>
                <b>{skyValue}</b>
            </Txt>
        </Root>
    )
}

export default Sky