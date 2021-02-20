// TimerContainer.tsx
import * as React from "react";
import { useState, useRef } from 'react';
import TimerPresenter from '../presentationals/TimerPresenter';

interface TimerProps {
    current : Date;
}

interface ServerTime {
    hours : string;
    minutes : string;
    seconds : string;
}

function TimerContainer ( { current } : TimerProps) {
    const [ ServerTime, setServerTime ] = useState<ServerTime>({
        hours : '',
        minutes : '',
        seconds : ''
    });

    const currentTime = useRef<any>();

    const setTime = () => {
        current.setSeconds(current.getSeconds() + 1);

        setServerTime({
            hours : current.getHours() < 10 ? "0" + current.getHours() : current.getHours().toString(),
            minutes : current.getMinutes() < 10 ? "0" + current.getMinutes() : current.getMinutes().toString(),
            seconds : current.getSeconds() < 10 ? "0" + current.getSeconds() : current.getSeconds().toString()
        });
    }

    React.useEffect( () => {
        currentTime.current = setInterval(setTime, 1000);

        return () => clearInterval(currentTime.current);
    });

    return (
        <TimerPresenter 
            year = {current.getFullYear()}
            month = {current.getMonth()}
            date = {current.getDate()}
            hours = {ServerTime.hours}
            minutes = {ServerTime.minutes}
            seconds = {ServerTime.seconds}
        />
    );
}

export default TimerContainer;