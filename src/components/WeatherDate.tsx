import { styled } from '@mui/material';
import { useEffect, useState } from 'react';

const DateLayout = styled("div")({
    marginLeft: 15,
    width: '70%',
    padding: 8,
    fontFamily: 'Quicksand sans-serif',
    fontSize: 13,
});

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const WeatherDate = () => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const year = time.getFullYear();
            const date = time.getDate();
            const day = time.getDay();
            let hours = time.getHours().toString()
            let minutes = time.getMinutes().toString()
            if (hours.length <= 1) hours = `0${hours}`
            if (minutes.length <= 1) minutes = `0${minutes}`
            const ampm = parseInt(hours) >= 12 ? ' PM' : ' AM'

            setTime((hours) + ':' + (minutes) + ampm)
            setDate(days[day] + ', ' + date + ' ' + months[month] + ' ' + year + ' | ')

        }, 1000);
    }, [])

    return (
        <DateLayout>
            {date}{time}
        </DateLayout>
    )
}


