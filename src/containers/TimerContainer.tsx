// TimerContainer.tsx
import * as React from "react";
import { useState } from 'react';
import useInterval from 'react-useinterval';
import TimerPresenter from '../presentationals/TimerPresenter';

interface TimerProps {
    current : Date;
}

interface ServerTime {
    hours : string;
    minutes : string;
    seconds : string;
}

function TimerContainer (props: TimerProps) {
    const { current } = props;
    const [ ServerTime, setServerTime ] = useState<ServerTime>({
        hours : '',
        minutes : '',
        seconds : ''
    });

    useInterval(()=>{
        current.setSeconds(current.getSeconds() + 1);

        var nowHours = current.getHours();
        var nowMinutes = current.getMinutes();
        var nowSeconds = current.getSeconds();

        const nowTime : ServerTime = {
            hours : nowHours < 10 ? "0" + nowHours : nowHours.toString(),
            minutes : nowMinutes < 10 ? "0" + nowMinutes : nowMinutes.toString(),
            seconds : nowSeconds < 10 ? "0" + nowSeconds : nowSeconds.toString()
        }

        setServerTime(serverTime => nowTime);
    }, 1000);

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